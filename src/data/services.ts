import type { IconName } from '../components/icons';

export type Service = {
  icon: IconName;
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
    text: "Vitrines, e-commerce, landing pages. Design unique, code propre, chargement instantané et référencement pensé dès la maquette. Aucun template recyclé, aucun constructeur générique.",
    tags: ['Next.js', 'Astro', 'Shopify', 'Headless CMS', 'Webflow'],
    wide: true,
  },
  {
    icon: 'auto',
    title: 'Automatisations',
    text: 'Devis, relances, facturation, reporting : vos process tournent sans vous. En moyenne, nos clients récupèrent 6 à 10 heures chaque semaine.',
    tags: ['n8n', 'Make', 'IA', 'Webhooks'],
    wide: true,
  },
  {
    icon: 'dev',
    title: 'Développement',
    text: 'Applications métier, espaces clients, API et intégrations à votre SI existant.',
    tags: ['React', 'Node', 'Postgres'],
  },
  {
    icon: 'seo',
    title: 'SEO & performance',
    text: 'Structure, contenus, Core Web Vitals. On vous rend visible durablement.',
    tags: ['Audit', 'Contenu', 'Netlinking'],
  },
  {
    icon: 'ops',
    title: 'Infogérance',
    text: 'Hébergement, sauvegardes, mises à jour, sécurité et supervision continue.',
    tags: ['Monitoring', 'Backups', 'SLA'],
  },
];
