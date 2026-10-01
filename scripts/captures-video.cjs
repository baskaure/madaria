/**
 * Vidéos de défilement des réalisations : la page entière parcourue de haut
 * en bas, animations comprises, dans public/realisations/shots/ :
 *
 *   <id>-defile.webm|mp4        1000 px, 60 i/s : fiche et page projet
 *   <id>-defile-carte.webm|mp4  560 px, 30 i/s : survol des cartes (léger)
 *
 * Chaque format existe en AV1 (WebM, le plus léger) et en H.264 (MP4, repli
 * pour les appareils qui ne lisent pas l'AV1, dont les iPhone d'avant 2023).
 *
 * Capture image par image, pas un enregistrement d'écran : le temps de la
 * page est piloté. L'horloge de Playwright remplace timers, Date,
 * performance.now et requestAnimationFrame (canvas, scripts) ; les
 * animations et transitions CSS sont mises en pause et recalées sur la même
 * horloge à chaque image, tout comme les vidéos intégrées aux pages. Chaque
 * image avance de 1/60 s exactement : la
 * vidéo est parfaitement fluide même si la machine rame pendant la capture.
 *
 * Usage :
 *   NODE_PATH=/home/aurelien/Documents/sites/leadmap/web/node_modules \
 *     node scripts/captures-video.cjs <id> [...]
 *
 * Playwright est emprunté à leadmap (d'où NODE_PATH), ffmpeg encode.
 * IMAGES=<dossier> garde les images intermédiaires pour les contrôler ;
 * avec REENCODER=1 en plus, les images déjà là sont réencodées sans recapture.
 *
 * Sources locales, à servir avant la capture (comme pour captures.cjs) :
 *   appat       npx vite preview --port 8766  dans ~/Documents/sites/appat/appat
 *               (pas python http.server : sans requêtes partielles, la vidéo
 *               du hero ne peut pas être positionnée et reste figée)
 *   kingdomads  python3 -m http.server 8767   dans ~/Documents/sites/marketwins/market-refonte/dist
 *   klientmap   npm run dev (port 3140)       dans ~/Documents/sites/leadmap/web
 * Mouvement réduit NON émulé (contrairement à captures.cjs) : on veut
 * justement les animations.
 */
const { chromium } = require('playwright');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

/** Adresse filmée, et au besoin une feuille injectée pour masquer un parasite. */
const SOURCES = {
  'tom-carvalho': { url: 'https://tomcarvalho.fr/' },
  'kingdomads-social': { url: 'https://kingdomads.fr/' },
  kingdomads: { url: 'http://127.0.0.1:8767/' },
  appat: { url: 'http://127.0.0.1:8766/' },
  // serveur de développement Next : son badge ne doit pas apparaître à l'image
  klientmap: { url: 'http://127.0.0.1:3140/', css: 'nextjs-portal{display:none!important}' },
};

/** Les deux formats publiés, tirés des mêmes images. */
const FORMATS = [
  { suffixe: 'defile', largeur: 1000, ips: 60, av1: 48, h264: 30 },
  { suffixe: 'defile-carte', largeur: 560, ips: 30, av1: 46, h264: 30 },
];

const OUT = path.join(__dirname, '..', 'public', 'realisations', 'shots');
const VUE = { width: 1440, height: 900 };
const IPS = 60;
const PAUSE_HAUT = 1.8; // s : le hero s'anime avant que la page ne défile
const PAUSE_BAS = 1.2; // s
const VITESSE = 900; // px/s en moyenne pendant le défilement

/** Accélère puis ralentit : départ et arrivée en douceur. */
const adoucir = (x) => 0.5 - Math.cos(Math.PI * x) / 2;

async function capturer(browser, id, { url, css }, tmp) {
  const ctx = await browser.newContext({ viewport: VUE, deviceScaleFactor: 1, locale: 'fr-FR' });
  const page = await ctx.newPage();
  await page.clock.install({ time: new Date('2026-09-30T10:00:00') });
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  if (css) await page.addStyleTag({ content: css });

  // laisse tourner l'initialisation (préchargeur, apparitions du hero) en
  // temps piloté, puis charge toutes les images sans faire défiler : les
  // apparitions au défilement doivent se jouer PENDANT la vidéo
  await page.clock.runFor(200);
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    for (const img of document.images) img.loading = 'eager';
    await Promise.all(Array.from(document.images).map((i) => i.decode().catch(() => {})));
  });
  await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
  // Horloge figée : sans ça, celle de Playwright continue d'avancer en temps
  // réel ET des 1/60 s ajoutés à chaque image. La capture prenant ~130 ms
  // réelles par image, les animations tournaient environ 7 fois trop vite.
  await page.clock.pauseAt((await page.evaluate(() => Date.now())) + 500);

  const hauteur = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight);
  const duree = PAUSE_HAUT + hauteur / VITESSE + PAUSE_BAS;
  const images = Math.round(duree * IPS);
  const cdp = await ctx.newCDPSession(page);

  for (let i = 0; i < images; i++) {
    const t = i / IPS;
    const x = Math.min(1, Math.max(0, (t - PAUSE_HAUT) / (hauteur / VITESSE)));
    const y = Math.round(hauteur * adoucir(x));
    await page.evaluate((y) => window.scrollTo(0, y), y);
    // une vraie image de rendu passe : les IntersectionObserver et écouteurs
    // de défilement de la page réagissent à la nouvelle position
    await page.waitForTimeout(24);
    // 1/60 s de temps piloté, arrondie à la milliseconde la plus juste
    await page.clock.runFor(Math.round(((i + 1) * 1000) / IPS) - Math.round((i * 1000) / IPS));
    // animations CSS et WAAPI recalées sur l'horloge pilotée (les animations
    // liées au défilement ont leur propre ligne de temps : on n'y touche pas)
    await page.evaluate(() => {
      const maintenant = performance.now();
      for (const a of document.getAnimations()) {
        if (!(a.timeline instanceof DocumentTimeline)) continue;
        if (a.__base === undefined) a.__base = maintenant - (Number(a.currentTime) || 0);
        a.pause();
        a.currentTime = maintenant - a.__base;
      }
      // vidéos de la page (fond de hero…) : même horloge, sinon elles
      // tourneraient en temps réel, en accéléré dans le résultat
      for (const v of document.querySelectorAll('video')) {
        if (v.readyState < 1) continue;
        if (v.__base === undefined) v.__base = maintenant - v.currentTime * 1000;
        if (!v.paused) v.pause();
        let t = (maintenant - v.__base) / 1000;
        if (Number.isFinite(v.duration) && v.duration > 0) t = v.loop ? t % v.duration : Math.min(t, v.duration);
        if (Math.abs(v.currentTime - t) > 0.001) v.currentTime = t;
      }
    });
    // attend que chaque vidéo ait atteint son image (attente réelle, côté
    // Node : les minuteries de la page sont figées par l'horloge pilotée)
    for (let k = 0; k < 300; k++) {
      if (!(await page.evaluate(() => [...document.querySelectorAll('video')].some((v) => v.seeking)))) break;
      await page.waitForTimeout(10);
    }
    const { data } = await cdp.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(tmp, `${id}-${String(i).padStart(5, '0')}.png`), Buffer.from(data, 'base64'));
    if (i % 120 === 0) process.stdout.write(`  ${id} : ${i}/${images}\r`);
  }
  await ctx.close();
  return images;
}

function encoder(id, tmp, images) {
  const ko = (f) => Math.round(fs.statSync(f).size / 1024);
  const bilan = [];
  for (const f of FORMATS) {
    const entree = ['-framerate', String(IPS), '-i', path.join(tmp, `${id}-%05d.png`),
      '-vf', `fps=${f.ips},scale=${f.largeur}:-2:flags=lanczos`];
    const webm = path.join(OUT, `${id}-${f.suffixe}.webm`);
    const mp4 = path.join(OUT, `${id}-${f.suffixe}.mp4`);
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...entree,
      '-c:v', 'libsvtav1', '-preset', '5', '-crf', String(f.av1), '-g', String(f.ips * 4), '-pix_fmt', 'yuv420p', '-an', webm],
      { stdio: ['ignore', 'ignore', 'inherit'] });
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...entree,
      '-c:v', 'libx264', '-preset', 'slow', '-crf', String(f.h264), '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', mp4]);
    bilan.push(`${f.suffixe} ${ko(webm)}/${ko(mp4)} Ko`);
  }
  console.log(`✓ ${id}  ${images} images, ${(images / IPS).toFixed(1)} s · webm/mp4 : ${bilan.join(' · ')}`);
}

(async () => {
  const ids = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(SOURCES);
  const tmp = process.env.IMAGES || fs.mkdtempSync(path.join(os.tmpdir(), 'captures-video-'));
  fs.mkdirSync(tmp, { recursive: true });
  const browser = await chromium.launch();
  let echecs = 0;
  for (const id of ids) {
    const source = SOURCES[id];
    if (!source) { console.error(`? ${id} : pas de source connue`); echecs++; continue; }
    try {
      const deja = fs.readdirSync(tmp).filter((f) => f.startsWith(`${id}-`) && f.endsWith('.png')).length;
      const images = process.env.REENCODER && deja ? deja : await capturer(browser, id, source, tmp);
      encoder(id, tmp, images);
    } catch (e) {
      echecs++;
      console.error(`✗ ${id} : ${e.message.split('\n')[0]}`);
    }
  }
  await browser.close();
  if (!process.env.IMAGES) fs.rmSync(tmp, { recursive: true, force: true });
  process.exit(echecs ? 1 : 0);
})();
