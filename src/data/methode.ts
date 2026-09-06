export type Etape = {
  num: string;
  titre: string;
  delai: string;
  text: string;
};

export const etapes: Etape[] = [
  {
    num: '01',
    titre: 'Cadrage',
    delai: 'Jour 1',
    text: "Un appel de 45 minutes pour comprendre votre marché, vos objectifs et vos contraintes. Vous repartez avec un périmètre chiffré, pas une estimation floue.",
  },
  {
    num: '02',
    titre: 'Design',
    delai: 'Jour 2 → 3',
    text: "Maquette sur-mesure incluse : vous validez le design avant la moindre ligne de code. Deux tours de retours inclus, sans surcoût.",
  },
  {
    num: '03',
    titre: 'Développement',
    delai: 'Jour 3 → 6',
    text: "Développement, intégration des contenus, automatisations, tests sur tous les écrans et navigateurs. Préproduction accessible en continu.",
  },
  {
    num: '04',
    titre: 'Mise en ligne',
    delai: 'Jour 7',
    text: 'Publication, formation enregistrée pour rester autonome sur vos contenus, et suivi des performances les premières semaines.',
  },
];
