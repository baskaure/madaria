export type Etape = {
  num: string;
  titre: string;
  delai: string;
  text: string;
  /** pastille pleine (étape considérée comme acquise dans le parcours type) */
  done?: boolean;
};

export const etapes: Etape[] = [
  {
    num: '01',
    titre: 'Cadrage',
    delai: 'Jour 1 → 3',
    text: "Un appel de 45 minutes pour comprendre votre marché, vos objectifs et vos contraintes. Vous repartez avec un périmètre chiffré, pas une estimation floue.",
    done: true,
  },
  {
    num: '02',
    titre: 'Design',
    delai: 'Semaine 1',
    text: 'Maquettes sur-mesure validées avant la moindre ligne de code. Deux tours de retours inclus, sans surcoût.',
    done: true,
  },
  {
    num: '03',
    titre: 'Build',
    delai: 'Semaine 2 → 3',
    text: "Développement, intégration des contenus, automatisations, tests sur tous les écrans et navigateurs. Préproduction accessible en continu.",
    done: true,
  },
  {
    num: '04',
    titre: 'Lancement',
    delai: 'J+21 → suivi 12 mois',
    text: 'Mise en ligne, formation enregistrée, suivi des performances et optimisations continues.',
  },
];
