import type { IconName } from '../components/icons';

export type Service = {
  icon: IconName;
  href?: string;
  title: string;
  text: string;
  tags: string[];
  /** occupe une demi-largeur de la grille bento au lieu d'un tiers */
  wide?: boolean;
};

export const services: Service[] = [
  {
    icon: 'site',
    title: 'Sites internet sur-mesure',
    href: '/services/creation-site-internet/',
    text: "Vitrines, e-commerce, landing pages. Design unique, code propre, chargement rapide et référencement pensé dès la maquette. Aucun template recyclé, aucun constructeur générique.",
    tags: ['Vitrine', 'E-commerce', 'Réservation'],
    wide: true,
  },
  {
    icon: 'auto',
    title: 'Automatisations',
    href: '/services/automatisation/',
    text: 'Devis, relances, facturation, reporting : vos process tournent sans vous. Nous relions vos outils pour limiter les ressaisies et les oublis.',
    tags: ['Devis', 'Relances', 'Suivi client'],
    wide: true,
  },
  {
    icon: 'dev',
    title: 'Développement',
    text: 'Applications métier, espaces clients, API et intégrations à votre SI existant.',
    tags: ['Espace client', 'Outils connectés'],
  },
  {
    icon: 'seo',
    title: 'SEO & performance',
    text: 'Structure, contenus, Core Web Vitals. On vous rend visible durablement.',
    tags: ['Audit', 'Contenus', 'Recherche locale'],
  },
  {
    icon: 'ops',
    title: 'Infogérance',
    text: 'Hébergement, sauvegardes, mises à jour, sécurité et supervision continue.',
    tags: ['Sauvegardes', 'Mises à jour', 'Suivi'],
  },
];
