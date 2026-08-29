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

export const offres: Offre[] = [
  {
    nom: 'Essentiel',
    prix: '1 490',
    unite: '€ HT',
    accroche: 'Le site vitrine qui installe votre crédibilité et capte vos premiers leads.',
    inclus: [
      "Jusqu'à 5 pages sur-mesure",
      'Design original, responsive',
      'SEO de base + Analytics',
      'Formulaire de contact',
      'Livraison en 3 semaines',
    ],
    cta: 'Choisir Essentiel',
  },
  {
    nom: 'Signature',
    prix: '3 900',
    unite: '€ HT',
    badge: 'Le plus choisi',
    accroche: 'Le site complet, connecté à vos outils, avec vos process déjà automatisés.',
    inclus: [
      'Pages illimitées + blog',
      'Direction artistique dédiée',
      '2 automatisations métier',
      'CRM / réservation / paiement',
      'SEO avancé + rédaction',
      '3 mois de suivi inclus',
    ],
    cta: 'Choisir Signature',
    feat: true,
  },
  {
    nom: 'Sur-mesure',
    prix: 'Sur devis',
    accroche: "Application métier, plateforme, système d'automatisation à l'échelle.",
    inclus: [
      'Cadrage et architecture',
      'Développement full-stack',
      'Intégrations API illimitées',
      'Automatisations IA',
      'Contrat de maintenance',
    ],
    cta: 'Parler du projet',
  },
];
