/**
 * Projets joués par la séquence du hero (`HeroSequence.astro`).
 *
 * Tout vient des projets eux-mêmes :
 *   - `blocs` : le wireframe de la phase Design, relevé sur leur vrai hero à
 *     1440 × 720 (boîtes mesurées par `scripts/captures-sequence.cjs`, en % de
 *     la page). Rôles : titre, texte, lien, bouton, surface, pilule, rond ;
 *   - `code` : extraits recopiés tels quels de leur dépôt, numéros de ligne
 *     compris. Rien de sensible : ni clé, ni variable d'environnement, ni URL
 *     privée, ni fichier d'authentification ;
 *   - couleurs : la palette déjà déclarée pour la fiche du projet
 *     (`data/realisations.ts`).
 */
import { realisations } from './realisations';
import { offres } from './offres';

interface Boite {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Bloc extends Boite {
  role: 'titre' | 'texte' | 'lien' | 'bouton' | 'surface' | 'pilule' | 'rond';
}

export interface LigneCode {
  /** Numéro de ligne dans le fichier ; absent pour la ligne qui nomme le fichier. */
  n?: number;
  code: string;
  /** Gardée sur mobile, où le panneau n'affiche que l'essentiel. */
  mobile?: boolean;
}

interface Champ {
  label: string;
  valeur: string;
  mobile?: boolean;
}

type Fin =
  | { type: 'notification'; titre: string; detail: string }
  | {
      type: 'leads';
      src: string;
      /** Même image en demi-largeur. */
      src1x: string;
      largeur: number;
      hauteur: number;
      alt: string;
      /** Zone des cartes de chaque colonne, repeinte à sa couleur tant qu'elle est vide. */
      colonnes: (Boite & { fond: string })[];
      /** Cartes du kanban ; `rang` = rangée d'arrivée. */
      cartes: (Boite & { rang: number })[];
    };

export interface ProjetSequence {
  id: string;
  nom: string;
  offre: string;
  url: string;
  chemin?: string;
  /** Variables CSS des couleurs du client, posées sur le projet. */
  couleurs: string;
  brief: Champ[];
  blocs: Bloc[];
  /** Dossier du dépôt, en tête du panneau de code. */
  dossier: string;
  code: LigneCode[];
  capture: { src: string; src1x: string; alt: string };
  fin: Fin;
}

const projet = (id: string) => realisations.find((r) => r.id === id)!;
const offre = (nom: string) => offres.find((o) => o.nom === nom)!.nom;
const bloc = (role: Bloc['role'], x: number, y: number, w: number, h: number): Bloc => ({ role, x, y, w, h });

/** Pixels de la capture CRM (1576 × 788, déjà recadrée) vers des % de la page. */
const CRM = { w: 1576, h: 788 };
const pxCrm = (x: number, y: number, w: number, h: number): Boite => {
  const r = (v: number) => Math.round(v * 1000) / 1000;
  return { x: r((x / CRM.w) * 100), y: r((y / CRM.h) * 100), w: r((w / CRM.w) * 100), h: r((h / CRM.h) * 100) };
};

// ---------------------------------------------------------------- Tom Carvalho
const tom = projet('tom-carvalho');
const [tomNoir, tomRouge, tomPapier] = tom.palette;

const tomCarvalho: ProjetSequence = {
  id: tom.id,
  nom: tom.nom,
  offre: offre('Vitrine'),
  url: 'tomcarvalho.fr',
  couleurs: [
    `--c-fond:${tomPapier}`,
    `--c-titre:${tomRouge}`,
    `--c-texte:${tomNoir}`,
    `--c-lien:${tomRouge}`,
    `--c-bouton:${tomNoir}`,
    `--c-surface:color-mix(in srgb, ${tomNoir} 8%, transparent)`,
  ].join(';'),
  brief: [
    { label: 'Client', valeur: tom.nom, mobile: true },
    { label: 'Activité', valeur: tom.activite },
    { label: 'Offre', valeur: offre('Vitrine'), mobile: true },
  ],
  blocs: [
    // nav : logo rond, trois liens en mono, bouton « Écris-moi »
    bloc('rond', 1.9, 2.5, 3.3, 6.7),
    bloc('texte', 37.6, 5.1, 6.8, 1.9),
    bloc('texte', 46.7, 5.1, 4.4, 1.9),
    bloc('texte', 53.3, 5.1, 6.2, 1.9),
    bloc('bouton', 91.9, 3.3, 6.2, 5),
    // « TOM » puis « CARVALHO », lettre à lettre (Anton, en trame de points)
    bloc('titre', 30.6, 17.8, 9.1, 41.7),
    bloc('titre', 40.6, 17.8, 10.3, 41.7),
    bloc('titre', 52.6, 17.8, 16.2, 41.7),
    bloc('titre', 30.8, 62.9, 4.4, 18.2),
    bloc('titre', 36.0, 62.9, 4.2, 18.2),
    bloc('titre', 40.8, 62.9, 4.1, 18.2),
    bloc('titre', 45.5, 62.9, 4.2, 18.2),
    bloc('titre', 50.1, 62.9, 4.2, 18.2),
    bloc('titre', 55.0, 62.9, 3.5, 18.2),
    bloc('titre', 59.2, 62.9, 4.2, 18.2),
    bloc('titre', 64.7, 62.9, 4.6, 18.2),
    // libellés des coins
    bloc('texte', 85.3, 10.9, 12.8, 1.8),
    bloc('texte', 89.2, 13.8, 8.9, 1.8),
    bloc('texte', 1.9, 89.8, 20.4, 1.8),
    bloc('texte', 1.9, 92.7, 15.2, 1.8),
    bloc('lien', 87.2, 92.8, 5.7, 1.8),
    bloc('lien', 93.8, 93.5, 4.2, 0.4),
  ],
  dossier: 'portfolio-tom-carvalho',
  code: [
    { code: '<!-- index.html -->' },
    { n: 40, code: '<header class="hero" id="top" data-title="TOM|CARVALHO">' },
    { code: '/* css/style.css */' },
    { n: 11, code: '--rouge:#e3170a;', mobile: true },
    { code: '// js/app.js', mobile: true },
    { n: 202, code: "ctx.font = '100px Anton';", mobile: true },
    { n: 203, code: 'const target = W * 0.9, cap = 0.84, gap = 0.2;' },
    { n: 287, code: 'const maxR = cell * 0.56;' },
    { n: 300, code: "dctx.fillStyle = '#e3170a'; dctx.fill(path);" },
    { n: 330, code: 'const R = Math.min(W, H) * 0.22;' },
  ],
  capture: {
    src: '/realisations/sequence/tom-carvalho-hero.webp',
    src1x: '/realisations/sequence/tom-carvalho-hero-1440.webp',
    alt: `Site internet réalisé pour ${tom.nom}, ${tom.activite.toLowerCase()} : le hero`,
  },
  fin: {
    type: 'notification',
    titre: 'Nouvelle demande de projet',
    detail: 'Formulaire de contact · tomcarvalho.fr',
  },
};

// ------------------------------------------------------------------- KlientMap
const km = projet('klientmap');
const [kmNuit, kmBleu, kmClair] = km.palette;

/**
 * Cartes du kanban sur la capture recadrée : x du blanc, puis (y, hauteur) par
 * rangée. Colonnes Lead, Répondeur et Gagné (« Contacté par mail » est vide,
 * « Perdu » est hors cadre).
 */
const COLONNES_CRM = [
  { x: 322, cartes: [[337, 118], [470, 117], [602, 94], [711, 94]] },
  { x: 964, cartes: [[337, 134], [486, 110], [611, 110], [736, 110]] },
  { x: 1285, cartes: [[337, 110], [462, 111], [588, 133], [736, 110]] },
] as const;
// liseré coloré de 6 px à gauche du blanc, ombre de 5 px dessous ; le bas de
// l'image coupe la dernière rangée
const BAS_COLONNE = CRM.h;

const klientmap: ProjetSequence = {
  id: km.id,
  nom: km.nom,
  offre: offre('Sur-mesure'),
  url: 'klientmap.fr',
  chemin: '/crm',
  couleurs: [
    `--c-fond:linear-gradient(180deg, ${kmNuit}, ${kmBleu} 150%)`,
    `--c-titre:${kmClair}`,
    `--c-texte:color-mix(in srgb, ${kmClair} 62%, transparent)`,
    `--c-lien:color-mix(in srgb, ${kmBleu} 55%, ${kmClair})`,
    `--c-bouton:${kmClair}`,
    `--c-surface:color-mix(in srgb, ${kmClair} 12%, transparent)`,
  ].join(';'),
  brief: [
    { label: 'Client', valeur: km.nom, mobile: true },
    { label: 'Activité', valeur: km.activite },
    { label: 'Offre', valeur: offre('Sur-mesure'), mobile: true },
  ],
  blocs: [
    // nav de verre flottante : marque, trois liens, « Se connecter », pilule
    bloc('surface', 9.7, 1.9, 80.6, 8.5),
    bloc('bouton', 10.9, 3.8, 2.4, 4.7),
    bloc('texte', 14.1, 5.1, 7, 2.2),
    bloc('texte', 35.3, 5.3, 4.6, 2.2),
    bloc('texte', 42.2, 5.3, 7.7, 2.2),
    bloc('texte', 52.1, 5.3, 2, 2.2),
    bloc('texte', 69.6, 5.3, 6.3, 2.2),
    bloc('bouton', 78, 3.5, 11.4, 5.4),
    // badge, titre sur deux lignes, sous-titre, deux boutons
    bloc('pilule', 44, 21.9, 12, 3.9),
    bloc('titre', 29.1, 30.5, 41.8, 8.3),
    bloc('titre', 25.2, 39.7, 49.7, 8.3),
    bloc('texte', 28.8, 52.8, 42.3, 2.6),
    bloc('texte', 30.8, 56.9, 38.3, 2.6),
    bloc('bouton', 35.6, 64.5, 16.9, 6.9),
    bloc('surface', 53.5, 64.4, 10.9, 7.2),
    // fenêtre produit : barre d'adresse, recherche, bouton, ligne d'état
    bloc('surface', 13.9, 79.4, 72.2, 21),
    bloc('texte', 48, 81.5, 7.8, 1.6),
    bloc('surface', 15.6, 87.7, 61.3, 5.8),
    bloc('bouton', 77.7, 87.7, 6.7, 5.8),
    bloc('lien', 15.6, 95.5, 32.1, 2.1),
  ],
  dossier: 'leadmap/web',
  code: [
    { code: '// lib/scraper-core.js', mobile: true },
    { n: 135, code: 'export async function findEmails(website) {', mobile: true },
    { n: 160, code: '  const raw = await findEmails(website);' },
    { n: 161, code: '  const valid = await validateEmails(raw, website);' },
    { code: '// lib/crmStatuses.js' },
    { n: 22, code: "  { id: 'appele', label: 'Répondeur', color: '#b4590e' }," },
    { code: '// lib/crm.js' },
    { n: 405, code: '    FROM leads l', mobile: true },
    { n: 407, code: '    ORDER BY l.updated_at DESC', mobile: true },
  ],
  capture: {
    src: '/realisations/sequence/klientmap-hero.webp',
    src1x: '/realisations/sequence/klientmap-hero-1440.webp',
    alt: `Landing de ${km.nom}, ${km.activite.toLowerCase()} : « ${km.accroche} »`,
  },
  fin: {
    type: 'leads',
    src: '/realisations/sequence/klientmap-crm.webp',
    src1x: '/realisations/sequence/klientmap-crm-788.webp',
    largeur: CRM.w,
    hauteur: CRM.h,
    alt: `Application ${km.nom} : le CRM en vue kanban, leads rangés par statut`,
    colonnes: COLONNES_CRM.map((c) => ({
      ...pxCrm(c.x - 10, 331, 266, BAS_COLONNE - 331),
      fond: 'rgb(238 242 248)',
    })),
    cartes: COLONNES_CRM.flatMap((c) =>
      c.cartes.map(([y, h], rang) => ({
        ...pxCrm(c.x - 8, y - 2, 260, Math.min(y + h + 5, BAS_COLONNE) - (y - 2)),
        rang,
      })),
    ),
  },
};

export const projets: ProjetSequence[] = [tomCarvalho, klientmap];
