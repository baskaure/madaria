/**
 * Avis Google, recopiés mot pour mot depuis la fiche Madaria. Nom, date et
 * texte tels qu'affichés par Google : ne pas les reformuler.
 */
export type Avis = {
  nom: string;
  /** couleur de l'avatar à initiale, comme Google */
  couleur: string;
  date: string;
  texte: string[];
  visite: string;
};

/** Note moyenne affichée sur la fiche Google. */
export const noteGoogle = '5,0';

export const avis: Avis[] = [
  {
    nom: 'vantablack vanta',
    couleur: '#7B1FA2',
    date: 'il y a un mois',
    texte: ['Très bonne agence, le référencement seo est super !'],
    visite: 'Visité en février',
  },
  {
    nom: 'Tom Carvalho',
    couleur: '#00796B',
    date: 'il y a un mois',
    texte: [
      'J’ai utilisé les services de Madaria et franchement, je ne suis pas déçu !',
      'J’ai créé mon site pour accompagner le développement de mon entreprise, et chacun de mes clients est stupéfait par la qualité de mon site !',
    ],
    visite: 'Visité en août',
  },
];
