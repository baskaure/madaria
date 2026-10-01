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
    text: "45 minutes au téléphone sur votre activité et vos objectifs. Vous repartez avec un périmètre chiffré.",
  },
  {
    num: '02',
    titre: 'Design',
    delai: 'Jour 2 → 3',
    text: "Maquette sur-mesure à valider avant la moindre ligne de code. Deux tours de retours inclus.",
  },
  {
    num: '03',
    titre: 'Développement',
    delai: 'Jour 3 → 6',
    text: "Intégration des contenus, tests sur téléphone, tablette et ordinateur. Préproduction ouverte en continu.",
  },
  {
    num: '04',
    titre: 'Mise en ligne',
    delai: 'Jour 7',
    text: 'Publication, formation enregistrée pour modifier vos contenus, et suivi des premières semaines.',
  },
];
