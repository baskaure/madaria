/**
 * Images de partage (Open Graph, 1200 × 630) générées au build : une par
 * page qui compte (accueil, guides, projets, métiers, villes…). Satori
 * compose la carte en SVG, sharp la convertit en JPEG. Les textes et les
 * prix viennent des mêmes données que les pages : une modification de tarif
 * ou de titre met l'image à jour au build suivant.
 *
 * Route : src/pages/og/[...chemin].jpg.ts. Base.astro choisit l'image d'une
 * page avec `ogPour(pathname)`, et retombe sur /og.png sinon.
 */
import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import sharp from 'sharp';
import { offres } from '../data/offres';
import { realisations } from '../data/realisations';
import { secteurs } from '../data/secteurs';
import { villes } from '../data/villes';
import { prestations } from '../data/prestations';
import { tousLesGuides } from './guides';

export type Carte = {
  /** chemin de la page, ex. « /guides/prix-site-internet/ » */
  page: string;
  label: string;
  titre: string;
  sousTitre?: string;
  /** id d'une réalisation : sa capture bureau s'affiche à droite */
  capture?: string;
};

const entree = offres[0];
const accroche = `Dès ${entree.prix} € HT/mois · création incluse`;

/** Toutes les cartes, une par page. */
export async function cartes(): Promise<Carte[]> {
  const guides = await tousLesGuides();
  return [
    { page: '/', label: 'Agence web · Lyon et partout en France', titre: 'Votre site internet en ligne en 7 jours.', sousTitre: 'Sites internet, automatisations et outils métier, avec un interlocuteur direct.' },
    { page: '/realisations/', label: 'Réalisations', titre: 'Des projets, des univers différents.', sousTitre: `${realisations.length} sites livrés : restaurants, artisans, créateurs, agences.` },
    ...realisations.map((r) => ({ page: `/realisations/${r.id}/`, label: `${r.secteur} · ${r.ville}`, titre: r.nom, sousTitre: r.accroche, capture: r.id })),
    ...prestations.map((p) => ({ page: `/services/${p.slug}/`, label: 'Service', titre: p.titre, sousTitre: p.intro.split('. ')[0] + '.' })),
    ...secteurs.map((s) => ({ page: `/site-internet/${s.slug}/`, label: s.nom, titre: s.h1, sousTitre: s.text })),
    ...villes.map((v) => ({ page: `/creation-site-internet/${v.slug}/`, label: v.nom, titre: `Création de site internet ${v.a}`, sousTitre: v.intro[0].split('. ')[0] + '.' })),
    { page: '/guides/', label: 'Guides', titre: 'Votre site, Google et vos clients, expliqués simplement.' },
    ...guides.map((g) => ({ page: `/guides/${g.id}/`, label: `Guide · ${g.data.categorie}`, titre: g.data.titre, sousTitre: g.data.chapo })),
    { page: '/a-propos/', label: 'À propos', titre: 'Aurélien Branco, fondateur de Madaria.', sousTitre: 'Je conçois et je code moi-même chaque site Madaria, depuis Lyon.' },
  ];
}

/** « /guides/prix-site-internet/ » → « guides/prix-site-internet » (« accueil » pour /). */
export const nomFichier = (page: string) => page.replace(/^\/|\/$/g, '') || 'accueil';

/** Image de partage d'une page, ou null si elle n'en a pas (l'image générale s'applique). */
export async function ogPour(pathname: string) {
  const p = pathname.endsWith('/') ? pathname : pathname + '/';
  return (await cartes()).some((c) => c.page === p) ? `/og/${nomFichier(p)}.jpg` : null;
}

// ---------- rendu ----------

const police = (paquet: string, graisse: number) =>
  fs.readFileSync(path.resolve(`node_modules/@fontsource/${paquet}/files/${paquet}-latin-${graisse}-normal.woff`));
let polices: Parameters<typeof satori>[1]['fonts'] | undefined;
const lesPolices = () =>
  (polices ??= [
    { name: 'Inter', data: police('inter', 400), weight: 400, style: 'normal' },
    { name: 'Inter', data: police('inter', 500), weight: 500, style: 'normal' },
    { name: 'Sora', data: police('sora', 500), weight: 500, style: 'normal' },
    { name: 'Sora', data: police('sora', 600), weight: 600, style: 'normal' },
  ]);

const LOGO = `data:image/svg+xml;base64,${Buffer.from(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255 174"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#A78BFA"/><stop offset="1" stop-color="#4F80F0"/></linearGradient></defs><rect x="25" y="0" width="230" height="34" rx="17" fill="#fff"/><rect x="0" y="70" width="190" height="34" rx="17" fill="#fff"/><rect x="20" y="140" width="92" height="34" rx="17" fill="#fff"/><rect x="132" y="140" width="98" height="34" rx="17" fill="url(#g)"/></svg>',
).toString('base64')}`;

/** Satori n'accepte pas le WebP : la capture est convertie en PNG au passage. */
async function captureEnPng(id: string) {
  const f = path.resolve(`public/realisations/shots/${id}-desktop.webp`);
  if (!fs.existsSync(f)) return null;
  const png = await sharp(f).resize(1120).png().toBuffer();
  return `data:image/png;base64,${png.toString('base64')}`;
}

type Noeud = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, ...enfants: (Noeud | string | null)[]): Noeud => ({
  type,
  props: { style, children: enfants.filter((e) => e !== null) },
});

const COULEURS = { fond: '#050407', texte: '#F5F4F8', mut: 'rgba(245,244,248,.66)', faint: 'rgba(245,244,248,.48)', acc: '#B4A5FF', ligne: 'rgba(255,255,255,.17)' };

export async function rendre(c: Carte): Promise<Buffer> {
  const capture = c.capture ? await captureEnPng(c.capture) : null;
  const avecVisuel = !!capture;
  // taille du titre selon sa longueur : il doit tenir sur trois lignes
  const long = c.titre.length;
  const taille = avecVisuel ? (long > 24 ? 54 : 64) : long > 70 ? 54 : long > 44 ? 62 : 72;

  const texte = h(
    'div',
    { display: 'flex', flexDirection: 'column', width: avecVisuel ? 560 : 1000 },
    h('div', { display: 'flex', fontSize: 20, fontWeight: 500, letterSpacing: 3, textTransform: 'uppercase', color: COULEURS.faint, marginBottom: 26 }, c.label),
    h('div', { display: 'flex', fontFamily: 'Sora', fontWeight: 600, fontSize: taille, lineHeight: 1.06, letterSpacing: -2, color: COULEURS.texte }, c.titre),
    c.sousTitre
      ? h('div', { display: 'flex', fontSize: 27, lineHeight: 1.4, color: COULEURS.mut, marginTop: 26 }, c.sousTitre.length > 120 ? c.sousTitre.slice(0, 117).replace(/\s+\S*$/, '') + '…' : c.sousTitre)
      : null,
  );

  const visuel = capture
    ? h(
        'div',
        { display: 'flex', flexDirection: 'column', position: 'absolute', right: -60, top: 150, width: 600, borderRadius: 16, overflow: 'hidden', border: `1px solid ${COULEURS.ligne}`, backgroundColor: '#0E0D14', boxShadow: '0 40px 80px rgba(0,0,0,.6)' },
        h('div', { display: 'flex', alignItems: 'center', height: 34, paddingLeft: 16, borderBottom: '1px solid rgba(255,255,255,.09)' },
          h('div', { display: 'flex', width: 10, height: 10, borderRadius: 5, backgroundColor: 'rgba(255,255,255,.18)', marginRight: 7 }),
          h('div', { display: 'flex', width: 10, height: 10, borderRadius: 5, backgroundColor: 'rgba(255,255,255,.18)', marginRight: 7 }),
          h('div', { display: 'flex', width: 10, height: 10, borderRadius: 5, backgroundColor: 'rgba(255,255,255,.18)' }),
        ),
        { type: 'img', props: { src: capture, width: 600, height: 375, style: { objectFit: 'cover', objectPosition: 'top' } } },
      )
    : null;

  const carte = h(
    'div',
    {
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative',
      width: 1200, height: 630, padding: '64px 72px', fontFamily: 'Inter', color: COULEURS.texte,
      backgroundColor: COULEURS.fond,
      backgroundImage: 'radial-gradient(circle at 18% 0%, rgba(139,124,246,.30), rgba(5,4,7,0) 55%)',
    },
    h('div', { display: 'flex', alignItems: 'center' },
      { type: 'img', props: { src: LOGO, width: 34, height: 23, style: { marginRight: 14 } } },
      h('div', { display: 'flex', fontFamily: 'Sora', fontWeight: 600, fontSize: 22, letterSpacing: 4 }, 'MADARIA'),
    ),
    visuel,
    texte,
    h('div', { display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 22, color: COULEURS.faint },
      h('div', { display: 'flex' }, 'madaria.fr'),
      h('div', { display: 'flex', padding: '10px 20px', borderRadius: 999, border: `1px solid ${COULEURS.ligne}`, color: COULEURS.texte, fontWeight: 500, backgroundColor: 'rgba(5,4,7,.85)' }, accroche),
    ),
  );

  const svg = await satori(carte as never, { width: 1200, height: 630, fonts: lesPolices() });
  return sharp(Buffer.from(svg)).jpeg({ quality: 86, mozjpeg: true }).toBuffer();
}
