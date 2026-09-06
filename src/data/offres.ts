export type Offre = {
  id: string;
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

// Les prix affichés servent aussi aux données structurées.
export const offres: Offre[] = [
  {
    id: 'vitrine',
    nom: 'Vitrine',
    prix: '690',
    unite: '€ HT',
    accroche: 'Le site qui installe votre crédibilité et vous rend joignable, en ligne en une semaine.',
    inclus: [
      'Maquette incluse, validée avant développement',
      "Jusqu'à 5 pages sur-mesure",
      'Design original, aucun template',
      'Design adapté au mobile',
      'Formulaire de contact',
      'Nom de domaine et mise en ligne',
      'Vitrine livrée en 7 jours après cadrage',
    ],
    cta: 'Choisir Vitrine',
  },
  {
    id: 'visibilite',
    nom: 'Visibilité',
    prix: '1 490',
    unite: '€ HT',
    badge: 'Pour développer votre visibilité',
    accroche: 'Le site complet, pensé pour être trouvé sur Google et dans les moteurs de réponse IA.',
    inclus: [
      'Maquette incluse, validée avant développement',
      'Pages et blog : périmètre défini au devis',
      'Direction artistique dédiée',
      'SEO technique et référencement local',
      'Contenus structurés pour la recherche',
      'Rédaction des contenus',
      'Analytics et tableau de bord',
    ],
    cta: 'Choisir Visibilité',
    feat: true,
  },
  {
    id: 'sur-mesure',
    nom: 'Sur-mesure',
    prix: 'Sur devis',
    accroche: "Site complet et back-office : espace client, base de données, automatisations métier.",
    inclus: [
      'Maquette incluse, validée avant développement',
      'Tout ce que contient Visibilité',
      'Back-end et base de données',
      'Espace client ou administration',
      'Automatisations et intégrations API',
      'Cadrage et architecture technique',
      'Maintenance proposée selon vos besoins',
    ],
    cta: 'Parler du projet',
  },
];

/** Conditions communes, reprises sur les pages de services et métier. */
export const conditionsOffres = [
  'Le délai de 7 jours concerne un site vitrine, après accord sur le devis et réception des contenus et accès nécessaires. Il suppose des validations dans le calendrier convenu. Les autres projets ont un planning dédié.',
  'La maquette est incluse dans la prestation et validée avant le développement. Le nombre de pages, la rédaction et les possibilités de modification des contenus sont précisés au devis.',
  'Le devis distingue le prix de création et les frais récurrents : durée du domaine inclus, hébergement, maintenance et éventuels abonnements de réservation ou de SMS. Toute option est chiffrée avant engagement.',
];
export const prixEntree = offres[0].prix;
export const offresStructurees = offres.filter(o => o.unite).map(o => ({
  '@type': 'Offer', name: o.nom, price: o.prix.replace(/\s/g, ''),
  priceCurrency: 'EUR', description: o.accroche,
}));
