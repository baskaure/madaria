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
    text: "Vitrines, e-commerce, landing pages. Design unique, code propre et référencement pensé dès la maquette. Aucun template recyclé.",
    tags: ['Vitrine', 'E-commerce', 'Réservation'],
    wide: true,
  },
  {
    icon: 'auto',
    title: 'Automatisations',
    href: '/services/automatisation/',
    text: 'Devis, relances, facturation, reporting. Nous relions vos outils pour en finir avec les ressaisies et les oublis.',
    tags: ['Devis', 'Relances', 'Suivi client'],
    wide: true,
  },
  {
    icon: 'dev',
    title: 'Développement',
    text: 'Applications métier, espaces clients, API et intégrations à vos outils existants.',
    tags: ['Espace client', 'Outils connectés'],
  },
  {
    icon: 'seo',
    title: 'SEO et performance',
    text: 'Structure, contenus, vitesse de chargement. Pour être trouvé dans votre ville, et le rester.',
    tags: ['Audit', 'Contenus', 'Recherche locale'],
  },
  {
    icon: 'ops',
    title: 'Infogérance',
    text: 'Hébergement, sauvegardes, mises à jour et sécurité, surveillés en continu.',
    tags: ['Sauvegardes', 'Mises à jour', 'Suivi'],
  },
];
