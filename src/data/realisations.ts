/**
 * Réalisations mises en avant sur l'accueil.
 *
 * Fichiers dans `public/realisations/`, un couple par site :
 *   poster — image fixe extraite de la première image de la capture (WebP 1280 × 625).
 *   apercu — la capture d'écran défilante, encodée en MP4 : à qualité égale un
 *            GIF pèse ici cinquante fois plus. Ni l'un ni l'autre n'est
 *            téléchargé avant activation de la carte.
 *
 * TODO — deux champs restent à compléter avant la mise en ligne :
 *   `points` décrit aujourd'hui ce que le site propose, pas ce qu'il a changé
 *   pour le client. Le titre de la section promet des résultats : il faut les
 *   vrais chiffres, ou changer le titre.
 *   `url` est vide partout, donc aucune carte n'est cliquable.
 */
export interface Realisation {
  nom: string;
  /** Métier + ville, affiché sous le nom. */
  secteur: string;
  /** Site en ligne : renseigné, la carte devient cliquable. */
  url?: string;
  poster?: string;
  apercu?: string;
  /** Dégradé de secours utilisé tant qu'il n'y a pas de visuel. */
  teinte: 'a' | 'b' | 'c';
  /** Deux ou trois résultats concrets, pas des fonctionnalités. */
  points: readonly string[];
}

/**
 * Site mis en vitrine dans le hero.
 *
 * Appât figure aussi dans `realisations` : le hero le montre en grand format
 * fixe, la grille le montre en mouvement. Les deux visuels sont distincts —
 * `appat-vitrine.webp` est tiré d'une capture pleine résolution, le poster de
 * la carte de la première image de l'aperçu animé.
 */
export const vitrine = {
  nom: 'Appât',
  secteur: 'Équipe de production vidéo',
  poster: '/realisations/appat-vitrine.webp',
} as const;

/**
 * L'ordre compte : la première entrée occupe toute la largeur de la grille et
 * sert de mise en avant, et seules les cinq premières s'affichent avant un clic
 * sur « voir plus ».
 */
export const realisations: readonly Realisation[] = [
  {
    nom: 'KlientMap',
    secteur: 'Outil SaaS · Prospection B2B',
    teinte: 'c',
    points: ['Scraping Google Maps', 'Campagnes email intégrées'],
    poster: '/realisations/klientmap.webp',
    apercu: '/realisations/klientmap.mp4',
  },
  {
    nom: 'Le Château des Tourelles',
    secteur: "Maison d'hôtes & restaurant · Vendée",
    teinte: 'b',
    points: ['Réservation en ligne', 'Site bilingue FR / EN'],
    poster: '/realisations/chateau-des-tourelles.webp',
    apercu: '/realisations/chateau-des-tourelles.mp4',
  },
  {
    nom: 'Tom Carvalho',
    secteur: 'Vidéaste indépendant',
    teinte: 'a',
    points: ['Portfolio vidéo', 'Sélection 2023 – 2026'],
    poster: '/realisations/tom-carvalho.webp',
    apercu: '/realisations/tom-carvalho.mp4',
  },
  {
    nom: 'Aurore +',
    secteur: 'Salon de piercing · Montpellier',
    teinte: 'c',
    points: ['Tarifs et soins détaillés', 'Ouverture affichée en direct'],
    poster: '/realisations/aurore-piercing.webp',
    apercu: '/realisations/aurore-piercing.mp4',
  },
  {
    nom: 'Kami',
    secteur: 'Restaurant · Capbreton',
    teinte: 'a',
    points: ['Réservation en ligne', 'Carte et menus à jour'],
    poster: '/realisations/kami.webp',
    apercu: '/realisations/kami.mp4',
  },
  {
    nom: 'Lucas Morin',
    secteur: 'Photographe mariage & portrait',
    teinte: 'b',
    points: ['Galeries mariages et shootings', 'Demande de devis intégrée'],
    poster: '/realisations/lucas-morin.webp',
    apercu: '/realisations/lucas-morin.mp4',
  },
  {
    nom: 'KingdomAds',
    secteur: "Génération d'opportunités commerciales",
    teinte: 'c',
    points: ['Prise de rendez-vous intégrée', 'Tunnel de qualification'],
    poster: '/realisations/kingdomads.webp',
    apercu: '/realisations/kingdomads.mp4',
  },
  {
    nom: 'Munda-Kfé',
    secteur: 'Restaurant de plage · Capbreton',
    teinte: 'c',
    points: ['Réservation en ligne', "Avis Tripadvisor mis en avant"],
    poster: '/realisations/munda-kfe.webp',
    apercu: '/realisations/munda-kfe.mp4',
  },
  {
    nom: 'Appât',
    secteur: 'Équipe de production vidéo',
    teinte: 'b',
    points: ['Portfolio vidéos et photos', 'Prise de contact directe'],
    poster: '/realisations/appat.webp',
    apercu: '/realisations/appat.mp4',
  },
  {
    // Second site KingdomAds. Deux points d'attention si tu déplaces l'une des
    // deux : leur `secteur` reprend le positionnement affiché par chacune, sans
    // quoi le nom répété passe pour un doublon ; et elles sont espacées de trois
    // rangs pour tomber en diagonale dans la grille à deux colonnes — à trois
    // rangs de moins elles s'empileraient dans la même colonne.
    nom: 'KingdomAds',
    secteur: 'Publicité sur les réseaux sociaux',
    teinte: 'a',
    points: ["Demande d'interview en ligne", "Fil d'actualités intégré"],
    poster: '/realisations/kingdomads-social.webp',
    apercu: '/realisations/kingdomads-social.mp4',
  },
  {
    nom: 'Recharge Clim Auto',
    secteur: 'Climatisation automobile · Montpellier',
    teinte: 'b',
    points: ['Prise de rendez-vous', 'Tarifs affichés'],
    poster: '/realisations/recharge-clim-auto.webp',
    apercu: '/realisations/recharge-clim-auto.mp4',
  },
];
