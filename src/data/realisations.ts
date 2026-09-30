/**
 * Réalisations présentées sur l'accueil — même mécanique que le portfolio
 * Kingdom Ads : quatre captures fixes par projet, dans
 * `public/realisations/shots/`, nommées d'après `id` :
 *
 *   <id>-desktop.webp  vue bureau 1440 × 900, réduite à 1200 px de large
 *   <id>-thumb.webp    même image en 640 px (aperçu flottant de la vue liste)
 *   <id>-mobile.webp   vue téléphone 390 × 844
 *   <id>-full.webp     page entière (1440 de large, coupée à 4200 px) en 900 px
 *
 * Elles sont produites par `scripts/captures.cjs` (voir son en-tête). Un
 * projet sans `full` ou sans `mobile` reste affichable : la carte montre la
 * vue bureau sans défilement, la fiche masque le téléphone.
 *
 * L'ordre du tableau est l'ordre d'affichage ; `vedette` = grande carte.
 */
export const secteurs = [
  'Restauration',
  'Hôtellerie & tourisme',
  'Beauté & bien-être',
  'Créateurs & vidéo',
  'Tech & SaaS',
  'Marketing & publicité',
  'Artisans & auto',
] as const;

export type Secteur = (typeof secteurs)[number];

export interface Realisation {
  /** Sert de nom de fichier aux captures et d'ancre (`#projet-<id>`). */
  id: string;
  nom: string;
  client: string;
  /** Métier, affiché sous le nom et dans la fiche. */
  activite: string;
  secteur: Secteur;
  ville: string;
  annee: string;
  /** Site en ligne : renseigné, la fiche propose « Voir le site ». */
  url?: string;
  /** Format livré : site vitrine, multipage, landing page, portfolio… */
  type: string;
  /** Trois premiers affichés sur la carte, tous dans la fiche. */
  tags: readonly string[];
  /** Couleur dominante du site montré : halo de la carte, teinte de la fiche. */
  accent: string;
  /** Fond, accent, texte : les trois pastilles de la fiche. */
  palette: readonly [string, string, string];
  /** Une phrase, celle du site ou son intention. */
  accroche: string;
  description: string;
  vedette?: boolean;
}

export const realisations: readonly Realisation[] = [
  {
    id: 'klientmap',
    nom: 'KlientMap',
    client: 'KlientMap',
    activite: 'Outil SaaS de prospection B2B',
    secteur: 'Tech & SaaS',
    ville: 'France',
    annee: '2026',
    type: 'Application SaaS',
    tags: ['Scraping Google Maps', 'Campagnes email', 'Export CSV / Excel', 'Tableau de bord'],
    accent: '#3B82F6',
    palette: ['#050B1F', '#3B82F6', '#EAF0FF'],
    accroche: 'Collectez, qualifiez et contactez vos leads B2B.',
    description:
      "Du scraping Google Maps à la campagne email, une seule application : on tape « plombier · Bordeaux » et le pipeline se remplit. Landing page sur fond bleu profond, démonstration du produit en cadre de navigateur, puis l'application elle-même : recherche, enrichissement des emails, envoi et suivi.",
    vedette: true,
  },
  {
    id: 'chateau-tourelles',
    nom: 'Le Château des Tourelles',
    client: 'Le Château des Tourelles',
    activite: "Maison d'hôtes & restaurant · proche Puy du Fou",
    secteur: 'Hôtellerie & tourisme',
    ville: 'Vendée',
    annee: '2026',
    type: 'Site multipage',
    tags: ['10+ pages', 'Réservation en ligne', 'Bilingue FR / EN', 'Bons cadeaux'],
    accent: '#C9A24A',
    palette: ['#0F1210', '#C9A24A', '#F1ECDF'],
    accroche: 'La vie de château, en Vendée.',
    description:
      "Hébergements, restaurant, guinguette, événements, créateurs, destinations Vendée, bons cadeaux, galerie : une dizaine de pages générées depuis une maquette unique. Serif noble, photos plein cadre, bouton de réservation présent partout.",
    vedette: true,
  },
  {
    id: 'tom-carvalho',
    nom: 'Tom Carvalho',
    client: 'Tom Carvalho',
    activite: 'Vidéaste indépendant',
    secteur: 'Créateurs & vidéo',
    ville: 'Paris',
    annee: '2026',
    url: 'https://tomcarvalho.fr/',
    type: 'Portfolio',
    tags: ['Portfolio vidéo', 'Films & photos', 'Services détaillés', 'Formulaire de contact'],
    // couleurs du site en ligne (css/style.css : --noir, --rouge, --papier) ;
    // la séquence du hero les lit dans cet ordre
    accent: '#E3170A',
    palette: ['#0A0A0A', '#E3170A', '#F1EFEA'],
    accroche: 'Des vidéos qui marquent.',
    description:
      "Un portfolio clair et graphique : le nom en lettres géantes tramées de points rouges, un badge « accès plateau » pour se présenter, puis les films, les photos prises entre deux plans et cinq services, du format court à l'étalonnage. Le formulaire invite à écrire, même avec une idée encore floue.",
  },
  {
    id: 'aurore-piercing',
    nom: 'Aurore Piercing',
    client: 'Aurore Piercing',
    activite: "Salon de piercing & bijoux d'oreille",
    secteur: 'Beauté & bien-être',
    ville: 'Montpellier',
    annee: '2026',
    type: 'Site vitrine',
    tags: ['Glassmorphism', 'Tarifs et soins', 'Ouverture en direct', 'Instagram'],
    accent: '#B76CF0',
    palette: ['#120A18', '#B76CF0', '#F7EEF9'],
    accroche: 'Ton prochain piercing commence ici.',
    description:
      "Piste « Aurora Glass » retenue parmi trois directions artistiques : halo violet, panneaux en verre dépoli, photo macro de l'oreille. Compositions du jour, bijoux inclus dès 20 €, soins détaillés, horaires d'ouverture affichés en direct.",
  },
  {
    id: 'kami',
    nom: 'Kami',
    client: 'Restaurant Kami',
    activite: 'Restaurant · cuisine de partage',
    secteur: 'Restauration',
    ville: 'Capbreton',
    annee: '2026',
    url: 'https://www.kami-capbreton.fr/',
    type: 'Site vitrine',
    tags: ['Réservation en ligne', 'Carte et menus à jour', 'Formule du midi', 'Avis clients'],
    accent: '#3E7C59',
    palette: ['#1E3A2B', '#3E7C59', '#F5EFE3'],
    accroche: 'Cuisine de partage et de plaisir.',
    description:
      "Vert profond et crème, une carte lisible en un coup d'œil, la formule du midi mise en avant et un bouton de réservation toujours à portée. Le site répond aux deux seules questions d'un client de restaurant : qu'est-ce qu'on mange, et comment on réserve.",
  },
  {
    id: 'lucas-morin',
    nom: 'Lucas Morin',
    client: 'Lucas Morin',
    activite: 'Photographe mariage & portrait',
    secteur: 'Créateurs & vidéo',
    ville: 'France',
    annee: '2026',
    type: 'Portfolio',
    tags: ['Galeries mariages', 'Shootings & marques', 'Demande de devis', 'Plein cadre'],
    accent: '#9A9A9A',
    palette: ['#FFFFFF', '#9A9A9A', '#111111'],
    accroche: 'Photographe de mariage & portrait.',
    description:
      "Un portfolio en noir et blanc où la photo prend toute la place : hero plein cadre, monogramme discret, navigation par univers (mariages, marques, shootings) et une demande de devis intégrée.",
  },
  {
    id: 'kingdomads',
    nom: 'KingdomAds · Marketwins',
    client: 'Kingdom Ads',
    activite: "Génération d'opportunités commerciales",
    secteur: 'Marketing & publicité',
    ville: 'Montpellier',
    annee: '2026',
    type: 'Landing page',
    tags: ['Tunnel de qualification', 'Prise de rendez-vous', 'Témoignages', 'Blog'],
    accent: '#E3B84F',
    palette: ['#050505', '#E3B84F', '#F4F1E6'],
    accroche: 'On ne vend pas des leads. On vend des opportunités commerciales qualifiées.',
    description:
      "Landing page noir et or pour une offre d'opportunités commerciales à coût connu d'avance : fonctionnement, processus, témoignages, équipe, et un test de qualification qui débouche sur une prise de rendez-vous.",
  },
  {
    id: 'munda-kfe',
    nom: 'Munda-Kfé',
    client: 'Munda-Kfé',
    activite: 'Restaurant de plage',
    secteur: 'Restauration',
    ville: 'Capbreton',
    annee: '2026',
    type: 'Site vitrine',
    tags: ['Réservation en ligne', 'Avis Tripadvisor', 'Menu du jour', 'Accès & horaires'],
    accent: '#E86FA6',
    palette: ['#1D2352', '#F4A7C3', '#FBEFE2'],
    accroche: "Les pieds dans le sable, face à l'océan.",
    description:
      "Rayures de cabine de plage, flamant rose et lettrage à la main : un site aussi joyeux que la terrasse. Note Tripadvisor en bandeau, menu du jour écrit chaque matin, réservation de table en un clic.",
    vedette: true,
  },
  {
    id: 'appat',
    nom: 'Appât',
    client: 'Appât',
    activite: 'Équipe de production vidéo',
    secteur: 'Créateurs & vidéo',
    ville: 'France',
    annee: '2026',
    type: 'Portfolio',
    tags: ['Vidéo plein écran', 'Portfolio vidéos et photos', 'Équipe', 'Prise de contact'],
    accent: '#F2B705',
    palette: ['#0A0A0A', '#F2B705', '#F5F5F5'],
    accroche: 'On raconte votre histoire.',
    description:
      "Vidéo plein écran dès l'ouverture, titre en capitales translucides, puis les réalisations, l'équipe et les photos. Un site sombre et immersif pour une équipe qui vend des images.",
  },
  {
    id: 'kingdomads-social',
    nom: 'KingdomAds',
    client: 'Kingdom Ads',
    activite: 'Agence de publicité Meta, Google & TikTok Ads',
    secteur: 'Marketing & publicité',
    ville: 'Montpellier',
    annee: '2026',
    url: 'https://kingdomads.fr/',
    type: 'Site vitrine',
    tags: ["Demande d'interview", "Fil d'actualités", 'Vidéo hero', 'SEO local'],
    accent: '#C99B2E',
    palette: ['#0A0908', '#C99B2E', '#F4F1E6'],
    accroche: 'Améliorez votre notoriété et rentabilité grâce à la publicité en ligne.',
    description:
      "Le site de l'agence : vidéo en fond de hero, lumière dorée, services, à propos et un fil d'actualités. L'appel à l'action est une demande d'interview plutôt qu'un formulaire de devis, pour qualifier avant de vendre.",
    vedette: true,
  },
  {
    id: 'recharge-clim',
    nom: 'Recharge Clim Auto',
    client: 'Recharge Clim Auto Montpellier 34',
    activite: 'Climatisation automobile',
    secteur: 'Artisans & auto',
    ville: 'Montpellier',
    annee: '2026',
    url: 'https://www.recharge-clim-auto-montpellier.fr/',
    type: 'Site vitrine',
    tags: ['Prise de rendez-vous', 'Tarifs affichés', 'SEO local', 'Appel direct'],
    accent: '#8FB8DE',
    palette: ['#0B1420', '#8FB8DE', '#EEF4FA'],
    accroche: 'Le retour du froid.',
    description:
      "Un site d'artisan qui va droit au but : le service, le prix, le bouton pour appeler ou prendre rendez-vous. Bleu glacé sur fond nuit, pensé pour la recherche locale « recharge clim Montpellier ».",
  },
];
