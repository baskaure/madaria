export type Etape = {
  delai: string;
  titre: string;
  text: string;
  /** pastille sous le texte : ce que l'étape coûte */
  paie: string;
  /** l'étape où l'on paie, mise en avant */
  payant?: boolean;
};

/** Trois rendez-vous : le client voit son site avant de payer. */
export const etapes: Etape[] = [
  {
    delai: 'Jour 1',
    titre: 'Un appel de 15 minutes',
    text: 'Votre métier, votre zone, ce que vous voulez. Pas de jargon, pas de devis à remplir.',
    paie: 'Gratuit',
  },
  {
    delai: 'Jour 3',
    titre: 'On vous montre la maquette',
    text: "En visio, ou chez vous si vous êtes à Lyon. Vous dites oui, on corrige, ou on s'arrête là.",
    paie: 'Gratuit',
  },
  {
    delai: '7 jours après votre oui*',
    titre: 'Votre site est en ligne',
    text: "Nom de domaine à votre nom, fiche Google reliée, bouton d'appel. On vous trouve.",
    paie: 'Premier paiement',
    payant: true,
  },
];
