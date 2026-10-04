import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const walk = dir => fs.readdirSync(dir, {withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(path.join(dir,e.name)) : [path.join(dir,e.name)]);
const files = walk(root).filter(f => f.endsWith('.html'));
const pages = new Map(files.map(f => [f,fs.readFileSync(f,'utf8')]));
const attr = (tag,name) => tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`))?.[1];
let links = 0;
for (const [file, html] of pages) {
  assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`${file}: un H1`);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(ids.length,new Set(ids).size,`${file}: IDs uniques`);
  assert.match(html,/<html lang="fr"/,file);
  assert.match(html,/<link rel="canonical" href="https:\/\/madaria.fr\//,file);
  assert.ok(!html.includes('dateModified'),`${file}: pas de date artificielle`);
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(m[1]);
  // image de partage : présente dans dist
  const og = html.match(/<meta property="og:image" content="https:\/\/madaria\.fr([^"]+)"/)?.[1];
  assert.ok(og && fs.existsSync(path.join(root,og)),`${file}: image de partage absente ${og}`);
  const route = '/'+path.relative(root,file).replace(/index\.html$/,'');
  for (const tag of html.matchAll(/<(?:a|img|source)\b[^>]*>/g)) {
    const value = attr(tag[0],tag[0].startsWith('<a')?'href':'src');
    if (!value || /^(https?:|mailto:|tel:|data:)/.test(value)) continue;
    const url = new URL(value.replaceAll('&amp;','&'),'https://madaria.fr'+route);
    let target = path.join(root,decodeURIComponent(url.pathname));
    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target=path.join(target,'index.html');
    assert.ok(fs.existsSync(target),`${file}: ressource absente ${value}`);
    if (url.hash && pages.has(target)) assert.ok(pages.get(target).includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),`${file}: ancre absente ${value}`);
    links++;
  }
}
const home = pages.get(path.join(root,'index.html'));
// Mur du haut de page (Mur.astro) : vignettes WebP optimisées, aucune vidéo
const mur = home.match(/<div class="mur"[\s\S]*?<\/script>/)?.[0];
assert.ok(mur,'Mur de réalisations présent');
assert.ok(!/<video\b/.test(mur),'Aucune vidéo dans le mur');
const tuiles = [...mur.matchAll(/<img\b[^>]*>/g)].map(([tag]) => tag);
assert.ok(tuiles.length >= 20,'Tuiles du mur présentes');
for (const tag of tuiles) {
  assert.equal(attr(tag,'loading'),'lazy','Tuile du mur en lazy');
  for (const src of (attr(tag,'srcset') || '').split(',').map(s => s.trim().split(' ')[0]).filter(Boolean))
    assert.ok(src.endsWith('.webp') && fs.existsSync(path.join(root,src)),`Tuile disponible ${src}`);
}
assert.ok(![...home.matchAll(/<link\b[^>]*>/g)].some(([tag]) => attr(tag,'rel') === 'preload' && attr(tag,'as') === 'image'),'Aucune image préchargée');
// formulaire de devis : champs requis, formules cochables depuis les offres
assert.match(home,/name="contact"[^>]*data-netlify="true"|data-netlify="true"[^>]*name="contact"/,'Formulaire Netlify');
assert.match(home,/<input[^>]*name="nom"[^>]*required/,'Nom requis');
assert.match(home,/<input[^>]*name="coordonnees"[^>]*required/,'Coordonnées requises');
assert.match(home,/data-offre="vitrine"/);
assert.match(home,/name="offre" value="vitrine"/);
assert.ok(!home.includes('novalidate'),'Validation native active');
for (const file of ['merci/index.html','404.html']) assert.match(pages.get(path.join(root,file)),/content="noindex, follow"/);
const sitemap = fs.readFileSync(path.join(root,'sitemap-0.xml'),'utf8');
assert.ok(!sitemap.includes('/merci/'),'Merci exclue du sitemap');
assert.ok(!sitemap.includes('/404'),'404 exclue du sitemap');
for (const [route,field,value] of [
 ['site-internet/barbier','secteur','Barbiers'],
 ['services/creation-site-internet','secteur','Création ou refonte de site'],
 ['realisations/kami','projet','Kami'],
]) {
 const html=pages.get(path.join(root,route,'index.html'));
 assert.ok(html.includes(`name="${field}" value="${value}"`),`${route}: contexte prérempli`);
 assert.ok(sitemap.includes(`https://madaria.fr/${route}/`),`${route}: sitemap`);
}
assert.ok(!fs.existsSync(path.join(root,'assets/chrome-capture-2026-09-06.gif')),'GIF archivé hors publication');
console.log(`${files.length} pages vérifiées, ${links} liens et médias internes valides. SEO, formulaires, sitemap et mur du haut de page : OK.`);
