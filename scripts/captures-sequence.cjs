/**
 * Captures de la séquence du hero (`HeroSequence.astro`), dans
 * public/realisations/sequence/ :
 *
 *   tom-carvalho-hero.webp      hero du portfolio, 1440 × 720 à 2x (2880 px)
 *   tom-carvalho-hero-1440.webp même image en 1440 px (srcset mobile)
 *   klientmap-hero.webp         hero de la landing, mêmes réglages
 *   klientmap-hero-1440.webp
 *   klientmap-crm.webp          vue CRM de l'appli (voir plus bas)
 *   klientmap-crm-788.webp
 *
 * Fenêtre 1440 × 720 : le cadre du hero est au format 2:1 (celui de l'ancienne
 * vitrine vidéo). Les deux heros tiennent en entier dans cette hauteur, sans
 * recadrage. Sans barre de navigateur : Playwright ne capture que la page.
 *
 * Le script affiche aussi, en JSON, les boîtes des éléments du hero en % de la
 * fenêtre : ce sont les blocs du wireframe dans `src/data/sequence.ts`.
 *
 * L'appli KlientMap exige une connexion : sa vue CRM vient d'une capture
 * d'écran fournie (1920 × 939), rangée hors git dans
 * `medias-source/klientmap-crm-source.png`. Le script la nettoie : le logo
 * d'alors est remplacé par l'actuel (`leadmap/brand/klientmap-logo.svg`), la
 * carte du compte (nom, e-mail) est effacée, puis l'image est recadrée en 2:1
 * sans la colonne « Perdu ».
 * Le logo de la landing en ligne est remplacé de la même façon.
 *
 * Usage :
 *   NODE_PATH=/home/aurelien/Documents/sites/leadmap/web/node_modules \
 *     node scripts/captures-sequence.cjs
 *
 * Tom Carvalho est servi en local (son domaine n'est pas encore résolu) :
 *   cd "…/portfolio tomi tom tom/portfolio-tom-carvalho" && python3 -m http.server 8768
 */
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const OUT = path.join(__dirname, '..', 'public', 'realisations', 'sequence');
const SOURCE_CRM = path.join(__dirname, '..', 'medias-source', 'klientmap-crm-source.png');
const LOGO_KM = '/home/aurelien/Documents/sites/leadmap/brand/klientmap-logo.svg';
const VUE = { width: 1440, height: 720 };

const webp = (src, dest, width, quality = 80) =>
  execFileSync('magick', [src, '-resize', `${width}x`, '-quality', String(quality), dest]);

/** Boîtes des sélecteurs, en % de la fenêtre (arrondies au dixième). */
async function boites(page, selecteurs) {
  return page.evaluate(({ selecteurs, W, H }) => {
    const pc = (v, t) => Math.round((v / t) * 1000) / 10;
    const res = {};
    for (const [nom, sel] of Object.entries(selecteurs)) {
      res[nom] = [...document.querySelectorAll(sel)].map((el) => {
        const r = el.getBoundingClientRect();
        return { x: pc(r.left, W), y: pc(r.top, H), w: pc(r.width, W), h: pc(r.height, H) };
      });
    }
    return res;
  }, { selecteurs, W: VUE.width, H: VUE.height });
}

/** Logo KlientMap actuel, rendu en PNG carré de `taille` px. */
function logoKm(taille) {
  const png = path.join(os.tmpdir(), `sequence-km-logo-${taille}.png`);
  execFileSync('magick', ['-background', 'none', '-density', '300', LOGO_KM, '-resize', `${taille}x${taille}`, png]);
  return png;
}

async function capturer(browser, { id, url, avant, selecteurs, attendre, logo }) {
  const ctx = await browser.newContext({ viewport: VUE, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  if (avant) await page.addInitScript(avant);
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  await page.mouse.move(-10, -10);
  await page.waitForTimeout(attendre);
  const png = path.join(os.tmpdir(), `sequence-${id}.png`);
  await page.screenshot({ path: png });
  const mesures = await boites(page, selecteurs);
  if (logo) {
    // le site en ligne porte encore l'ancien logo : on pose l'actuel à sa place (capture en 2x)
    const r = await page.locator(logo).boundingBox();
    const taille = Math.round(r.width * 2);
    execFileSync('magick', [png, logoKm(taille), '-geometry', `+${Math.round(r.x * 2)}+${Math.round(r.y * 2)}`, '-composite', png]);
  }
  await ctx.close();
  webp(png, path.join(OUT, `${id}-hero.webp`), 2880);
  webp(png, path.join(OUT, `${id}-hero-1440.webp`), 1440);
  console.log(`\n== ${id} ==\n${JSON.stringify(mesures)}`);
  return png;
}

/**
 * Vue CRM : logo à jour, compte effacé, recadrage 2:1 en haut à gauche
 * (1576 × 788). Le recadrage s'arrête entre « Gagné » et « Perdu » : la
 * colonne des prospects perdus, de vrais établissements, n'est pas publiée.
 */
function crm() {
  const propre = path.join(os.tmpdir(), 'sequence-km-crm.png');
  execFileSync('magick', [
    SOURCE_CRM,
    // carte du compte en bas de la barre latérale : repeinte au fond de page
    '-fill', 'srgb(233,236,244)', '-draw', 'rectangle 20,862 262,928',
    // l'ancien logo occupe 40 × 40 px en (30, 33) sur la capture d'origine
    logoKm(40), '-geometry', '+30+33', '-composite',
    '-crop', '1576x788+0+0', '+repage',
    propre,
  ]);
  webp(propre, path.join(OUT, 'klientmap-crm.webp'), 1576, 82);
  webp(propre, path.join(OUT, 'klientmap-crm-788.webp'), 788, 82);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  // `node scripts/captures-sequence.cjs crm` : la vue CRM seule, sans navigateur
  if (process.argv[2] === 'crm') return crm();
  const { chromium } = require('playwright');
  const browser = await chromium.launch();

  await capturer(browser, {
    id: 'tom-carvalho',
    url: 'http://127.0.0.1:8768/',
    // l'amorce « 3·2·1 » ne se joue qu'une fois par session : on la déclare vue
    avant: () => sessionStorage.setItem('tom-leader', '1'),
    // la trame de points se dessine au fil des images de la vidéo
    attendre: 4000,
    selecteurs: {
      logo: 'nav .logo-img',
      liens: 'nav ul a',
      cta: 'nav .nav-cta',
      coins: '.hero > .hero-ui',
    },
  });

  await capturer(browser, {
    id: 'klientmap',
    url: 'https://klientmap.fr/',
    attendre: 2500,
    logo: '.lp-brand-mark',
    selecteurs: {
      nav: '.lpnav',
      marque: '.lp-brand-mark',
      nom: '.lp-brand-name',
      liens: '.lpnav-links > *',
      login: '.lp-nav-login',
      cta: '.lp-nav-cta',
      badge: '.lp-hero-badges span',
      titre: '.lp-hero h1',
      sous: '.lp-hero-sub',
      boutons: '.lp-hero-ctas > *',
      fenetre: '.lp-window',
      barre: '.lp-window-bar',
      recherche: '.lp-window-search',
      statut: '.lp-window-status',
      lignes: '.lp-trow',
    },
  });

  await browser.close();
  crm();
  console.log('\nCaptures écrites dans', OUT);
})();
