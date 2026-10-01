export type Offre = {
  id: string;
  nom: string;
  /** Prix affiché en premier : la mensualité de l'abonnement, ou « Sur devis ». */
  prix: string;
  unite?: string;
  /** Même formule payée en une fois, sans abonnement (€ HT). */
  achat?: string;
  accroche: string;
  inclus: string[];
  cta: string;
  /** offre mise en avant */
  feat?: boolean;
  badge?: string;
  /** ligne sous le prix quand il n'y a pas de prix d'achat */
  note?: string;
};

/**
 * Stratégie de lancement (sept. 2026) : l'abonnement mensuel passe en premier,
 * création incluse, à un prix volontairement sous le marché pour que la
 * décision soit facile. L'achat en une fois reste proposé à côté, et sert de
 * repère. Les prix remonteront si le modèle prend : ils ne sont écrits
 * qu'ici, tout le site (pages, FAQ, données structurées, llms.txt) en découle.
 */
export const ENGAGEMENT_MOIS = 12;

/**
 * Site acheté en une fois : une panne due à notre travail est corrigée
 * gratuitement ; les modifications et évolutions sont facturées à l'heure.
 */
export const TAUX_HORAIRE = 30;

// Les prix affichés servent aussi aux données structurées.
export const offres: Offre[] = [
  {
    id: 'vitrine',
    nom: 'Vitrine',
    prix: '49',
    unite: '€ HT/mois',
    achat: '690',
    accroche: 'Le site qui installe votre crédibilité et vous rend joignable, en ligne en une semaine.',
    inclus: [
      'Création incluse, maquette validée avant développement',
      "Jusqu'à 5 pages sur-mesure",
      'Design original, adapté au mobile',
      'Formulaire de contact',
      'Nom de domaine à votre nom, hébergement et mises à jour',
      '30 min de modifications par mois',
      'Vitrine livrée en 7 jours après cadrage',
    ],
    cta: 'Choisir Vitrine',
  },
  {
    id: 'visibilite',
    nom: 'Visibilité',
    prix: '79',
    unite: '€ HT/mois',
    achat: '1 490',
    badge: 'Recommandé',
    accroche: 'Le site complet, pensé pour être trouvé sur Google et dans les moteurs de réponse IA.',
    inclus: [
      'Tout Vitrine, avec pages et blog définis au devis',
      'Direction artistique dédiée',
      'SEO technique et référencement local',
      'Contenus structurés pour la recherche',
      'Rédaction des contenus',
      'Analytics et tableau de bord',
      '1 h de modifications par mois',
    ],
    cta: 'Choisir Visibilité',
    feat: true,
  },
  {
    id: 'sur-mesure',
    nom: 'Sur-mesure',
    prix: 'Sur devis',
    note: 'Chiffré sous 24 h après un appel',
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
  `En abonnement, la création, l'hébergement, les mises à jour et les modifications mensuelles de la formule sont compris, sans rien à payer au départ. Engagement de ${ENGAGEMENT_MOIS} mois, prélèvement mensuel, puis résiliable à tout moment. Le nom de domaine est à votre nom : il vous reste si vous arrêtez. Le site est alors dépublié, ou ses fichiers vous sont cédés au prix indiqué au devis.`,
  "Vous préférez payer en une fois ? Le prix d'achat de chaque formule est affiché. Le devis distingue alors le prix de création et les frais récurrents : hébergement, maintenance et éventuels abonnements de réservation ou de SMS.",
  'Le délai de 7 jours concerne un site vitrine, après accord sur le devis et réception des contenus et accès nécessaires. Il suppose des validations dans le calendrier convenu. Les autres projets ont un planning dédié.',
  'La maquette est incluse et validée avant le développement. Le nombre de pages, la rédaction, les modifications au-delà du forfait mensuel et toute option sont chiffrés avant engagement.',
];

const premiere = offres[0];
/** Point d'entrée affiché partout : « 49 € HT/mois ». */
export const prixEntree = `${premiere.prix} ${premiere.unite}`;
/** Même formule en une fois : « 690 € HT ». */
export const achatEntree = `${premiere.achat} € HT`;

const nombre = (prix: string) => prix.replace(/\s/g, '');
/**
 * Données structurées : pour chaque formule chiffrée, l'offre d'abonnement
 * (prix unitaire au mois) et l'offre d'achat en une fois.
 */
export const offresLd = (liste: Offre[] = offres) =>
  liste.filter(o => o.unite).flatMap(o => [
    {
      '@type': 'Offer', name: `${o.nom} — abonnement`, description: o.accroche,
      price: nombre(o.prix), priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification', price: nombre(o.prix), priceCurrency: 'EUR',
        unitCode: 'MON', referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
      },
    },
    ...(o.achat ? [{
      '@type': 'Offer', name: `${o.nom} — achat en une fois`, description: o.accroche,
      price: nombre(o.achat), priceCurrency: 'EUR',
    }] : []),
  ]);
export const offresStructurees = offresLd();
