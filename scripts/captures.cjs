/**
 * Captures des réalisations — 4 fichiers WebP par projet, dans
 * public/realisations/shots/ :
 *
 *   <id>-desktop.webp  1440 × 900 réduit à 1200 px de large (carte, ruban)
 *   <id>-thumb.webp    même image, 640 px de large (aperçu flottant vue liste)
 *   <id>-mobile.webp   390 × 844 (téléphone qui surgit au survol, modale)
 *   <id>-full.webp     page entière 1440 de large, coupée à 4200 px,
 *                      réduite à 900 px (défilement au survol, modale)
 *
 * Usage :
 *   NODE_PATH=/home/aurelien/Documents/sites/leadmap/web/node_modules \
 *     node scripts/captures.cjs [id ...]
 *
 * Playwright n'est pas une dépendance du site : on emprunte celui de leadmap
 * (d'où NODE_PATH), et ImageMagick fait la conversion WebP. Sans argument,
 * tous les projets de SOURCES sont capturés.
 *
 * Les sites locaux sont servis par `python3 -m http.server 8765` lancé depuis
 * ~/Documents/sites ; KlientMap par `next dev -p 3140` dans leadmap/web.
 */
const { chromium } = require('playwright');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const LOCAL = 'http://127.0.0.1:8765';
const SOURCES = {
  'klientmap':         'http://127.0.0.1:3140/',
  'chateau-tourelles': `${LOCAL}/chateau%20tourelles/maquettes-services/acceuil-chateau-tourelles/index.html`,
  'tom-carvalho':      `${LOCAL}/portfolio%20tomi%20tom%20tom/portfolio-tom-carvalho/index.html`,
  'aurore-piercing':   `${LOCAL}/aurorepiercing/aurorepiercing/propositions/aurora/index.html`, // piste retenue, pas le hub des trois pistes
  'kami':              `${LOCAL}/kami/kami/index.html`,
  'lucas-morin':       `${LOCAL}/lm/index.html`,
  'kingdomads':        'http://127.0.0.1:8767/', // marketwins/market-refonte/dist servi à la racine (chemins absolus)
  'munda-kfe':         `${LOCAL}/munda%20kf%C3%A9%20V2/munda-kfe-V2/index.html`,
  'appat':             'http://127.0.0.1:8766/',
  'kingdomads-social': 'https://kingdomads.fr/',
  // aurore-piercing, chateau-tourelles et recharge-clim reprennent les
  // captures du portfolio Kingdom Ads.
};

const OUT = path.join(__dirname, '..', 'public', 'realisations', 'shots');
const FULL_MAX = 4200;

/**
 * Projets dont la page entière est assemblée par tranches de viewport plutôt
 * que par `fullPage: true` : Chromium capture alors hors viewport et laisse
 * noires les images chargées en paresseux / décodées en asynchrone (photos
 * d'équipe et vignettes d'Appât). Les éléments fixes (nav) sont masqués à
 * partir de la deuxième tranche pour ne pas se répéter.
 */
const TRANCHES = new Set(['appat']);

const webp = (src, dest, width, quality) =>
  execFileSync('magick', [src, '-resize', `${width}x`, '-quality', String(quality), dest]);

/** Fait défiler toute la page pour déclencher les apparitions au scroll, puis remonte. */
async function parcourir(page) {
  await page.evaluate(async () => {
    // `scroll-behavior: smooth` (Tom Carvalho, KingdomAds…) rendrait le
    // retour en haut progressif : la capture partait avant la fin du
    // défilement, à mi-page, avec les sections encore invisibles.
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    const pas = Math.max(400, Math.floor(window.innerHeight * 0.7));
    const attendre = (ms) => new Promise((r) => setTimeout(r, ms));
    let y = 0;
    const max = () => document.documentElement.scrollHeight;
    while (y < max()) {
      y += pas;
      window.scrollTo(0, y);
      await attendre(140);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    await attendre(500);
  });
  // garde-fou : on ne capture jamais une page qui n'est pas revenue en haut
  await page.waitForFunction(() => window.scrollY === 0, null, { timeout: 5000 });
  await page.waitForTimeout(300);
}

async function ouvrir(browser, url, options) {
  const ctx = await browser.newContext({ ...options, reducedMotion: 'reduce', locale: 'fr-FR' });
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
  } catch {
    // certaines pages gardent une connexion ouverte (vidéo, websocket) :
    // on se contente du chargement de base
    await page.waitForLoadState('load');
  }
  await page.waitForTimeout(800);
  await parcourir(page);
  await imagesPretes(page);
  return { ctx, page };
}

/**
 * Le défilement a déclenché les images `loading="lazy"` : on attend qu'elles
 * soient chargées et décodées (Appât affiche ses photos à opacité 0 tant que
 * `onLoad` n'a pas tiré), puis que les fondus d'apparition se terminent.
 */
async function imagesPretes(page) {
  await page
    .evaluate(() =>
      Promise.all(
        Array.from(document.images).map((img) =>
          (img.complete
            ? Promise.resolve()
            : new Promise((r) => { img.addEventListener('load', r, { once: true }); img.addEventListener('error', r, { once: true }); })
          ).then(() => img.decode().catch(() => {})),
        ),
      ),
    )
    .catch(() => {});
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(1000);
}

async function parTranches(page, dest, hauteur, tmp, id) {
  const VUE = 900;
  const morceaux = [];
  for (let y = 0, k = 0; y < hauteur; y += VUE, k++) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    if (k === 1) {
      // seulement `fixed` : un bloc `sticky` (texte « À propos » d'Appât) fait
      // partie du contenu et disparaîtrait de la page
      await page.evaluate(() => {
        for (const e of document.querySelectorAll('body *')) {
          if (getComputedStyle(e).position === 'fixed') e.style.visibility = 'hidden';
        }
      });
    }
    // les photos de 6000 px sont re-décodées à chaque entrée dans le viewport
    await page.evaluate(() => Promise.all(Array.from(document.images).map((i) => i.decode().catch(() => {})))).catch(() => {});
    await page.waitForTimeout(900);
    const reel = await page.evaluate(() => window.scrollY);
    const f = path.join(tmp, `${id}-tranche-${k}.png`);
    await page.screenshot({ path: f, animations: 'disabled', timeout: 90000 });
    // en bas de page, le défilement plafonne : on ne garde que la partie neuve
    const decalage = y - reel;
    const h = Math.min(VUE - decalage, hauteur - y);
    // parenthèses : sans elles, ImageMagick appliquerait le crop à toutes les tranches déjà lues
    morceaux.push('(', f, '-crop', `1440x${h}+0+${decalage}`, '+repage', ')');
  }
  execFileSync('magick', [...morceaux, '-append', dest]);
  await page.evaluate(() => window.scrollTo(0, 0));
}

async function capturer(browser, id, url, tmp) {
  const png = (nom) => path.join(tmp, `${id}-${nom}.png`);

  // --- bureau : vue + page entière -----------------------------------------
  const bureau = await ouvrir(browser, url, { viewport: { width: 1440, height: 900 } });
  await bureau.page.screenshot({ path: png('desktop'), animations: 'disabled', timeout: 90000 });
  const hauteur = await bureau.page.evaluate(() => document.documentElement.scrollHeight);
  const hauteurFull = Math.min(hauteur, FULL_MAX);
  if (TRANCHES.has(id)) {
    await parTranches(bureau.page, png('full'), hauteurFull, tmp, id);
  } else {
    await bureau.page.screenshot({
      path: png('full'),
      fullPage: true,
      animations: 'disabled',
      timeout: 90000,
      clip: { x: 0, y: 0, width: 1440, height: hauteurFull },
    });
  }
  await bureau.ctx.close();

  // --- mobile ---------------------------------------------------------------
  const mobile = await ouvrir(browser, url, {
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  await mobile.page.screenshot({ path: png('mobile'), animations: 'disabled', timeout: 90000 });
  await mobile.ctx.close();

  // --- conversion -------------------------------------------------------------
  webp(png('desktop'), path.join(OUT, `${id}-desktop.webp`), 1200, 82);
  webp(png('desktop'), path.join(OUT, `${id}-thumb.webp`), 640, 76);
  webp(png('mobile'), path.join(OUT, `${id}-mobile.webp`), 390, 82);
  webp(png('full'), path.join(OUT, `${id}-full.webp`), 900, 78);
  console.log(`✓ ${id}  (page entière : ${Math.min(hauteur, FULL_MAX)} px)`);
}

(async () => {
  const ids = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(SOURCES);
  fs.mkdirSync(OUT, { recursive: true });
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'captures-'));
  const browser = await chromium.launch();
  let echecs = 0;
  for (const id of ids) {
    const url = SOURCES[id];
    if (!url) { console.error(`? ${id} : pas de source connue`); echecs++; continue; }
    try {
      await capturer(browser, id, url, tmp);
    } catch (e) {
      echecs++;
      console.error(`✗ ${id} : ${e.message.split('\n')[0]}`);
    }
  }
  await browser.close();
  fs.rmSync(tmp, { recursive: true, force: true });
  process.exit(echecs ? 1 : 0);
})();
