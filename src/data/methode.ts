import { prixEntree } from './offres';

export type Etape = {
  delai: string;
  titre: string;
  text: string;
  /** pastille sous le texte */
  paie: string;
  /** pastille mise en avant (lavande) */
  payant?: boolean;
};

/**
 * Trois rendez-vous. Chaque promesse ici (délai, gratuité, moment du
 * paiement) doit coller aux conditions de data/offres.ts : ne rien promettre
 * qu'elles ne disent pas (ex. « vous payez à la mise en ligne »).
 */
export const etapes: Etape[] = [
  {
    delai: 'Jour 1',
    titre: 'Un appel de 15 minutes',
    text: 'Votre métier, votre zone, ce que vous voulez. Pas de jargon, pas de devis à remplir.',
    paie: 'Devis gratuit',
  },
  {
    delai: 'Jour 3',
    titre: 'On vous montre la maquette',
    text: "En visio, ou chez vous si vous êtes à Lyon. Vous dites oui, ou on corrige avant de construire.",
    paie: 'Maquette incluse',
  },
  {
    delai: 'Jour 7*',
    titre: 'Votre site est en ligne',
    text: "Nom de domaine à votre nom, fiche Google reliée, bouton d'appel. On vous trouve.",
    paie: `Dès ${prixEntree}, rien au départ`,
    payant: true,
  },
];
