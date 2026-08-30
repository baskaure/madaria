export type Offre = {
  nom: string;
  prix: string;
  unite?: string;
  accroche: string;
  inclus: string[];
  cta: string;
  /** offre mise en avant */
  feat?: boolean;
  badge?: string;
};

// TODO : montants à valider. Positionnement voulu = nettement sous le marché
// (une vitrine d'agence se négocie couramment entre 2 000 et 4 000 € HT).
export const offres: Offre[] = [
  {
    nom: 'Vitrine',
    prix: '690',
    unite: '€ HT',
    accroche: 'Le site qui installe votre crédibilité et vous rend joignable, en ligne en une semaine.',
    inclus: [
      'Maquette offerte, comprise dans le prix',
      "Jusqu'à 5 pages sur-mesure",
      'Design original, aucun template',
      'Affichage parfait sur mobile',
      'Formulaire de contact',
      'Nom de domaine et mise en ligne',
      'Livré en 7 jours',
    ],
    cta: 'Choisir Vitrine',
  },
  {
    nom: 'Visibilité',
    prix: '1 490',
    unite: '€ HT',
    badge: 'Le plus choisi',
    accroche: 'Le site complet, pensé pour être trouvé sur Google et dans les moteurs de réponse IA.',
    inclus: [
      'Maquette offerte, comprise dans le prix',
      'Pages illimitées + blog',
      'Direction artistique dédiée',
      'SEO technique et référencement local',
      'Optimisation pour les moteurs IA (GEO)',
      'Rédaction des contenus',
      'Analytics et tableau de bord',
    ],
    cta: 'Choisir Visibilité',
    feat: true,
  },
  {
    nom: 'Sur-mesure',
    prix: 'Sur devis',
    accroche: "Site complet et back-office : espace client, base de données, automatisations métier.",
    inclus: [
      'Maquette offerte, comprise dans le prix',
      'Tout ce que contient Visibilité',
      'Back-end et base de données',
      'Espace client ou administration',
      'Automatisations et intégrations API',
      'Cadrage et architecture technique',
      'Contrat de maintenance',
    ],
    cta: 'Parler du projet',
  },
];
