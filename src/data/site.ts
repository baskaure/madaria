export const site = {
  name: 'Madaria',
  domain: 'madaria.fr',
  title: 'Madaria — Agence digitale · Sites, automatisations, développement',
  description:
    "Madaria conçoit des sites internet performants, automatise vos process et développe les outils métier dont votre activité a besoin.",
} as const;

/**
 * Ancres préfixées par « / » : depuis une page métier ou légale, un simple
 * `#services` ne pointe sur rien. Sur l'accueil, `/#services` se comporte
 * exactement comme `#services` — même document, pas de rechargement.
 */
export const nav = [
  { href: '/#services', label: 'Services' },
  { href: '/#methode', label: 'Méthode' },
  { href: '/#realisations', label: 'Réalisations' },
  { href: '/#secteurs', label: 'Secteurs' },
  { href: '/#offres', label: 'Offres' },
  { href: '/#faq', label: 'FAQ' },
] as const;

export const contact = {
  email: 'contact@madaria.fr',
  tel: '06 99 68 19 57',
  /** même numéro au format international, pour les liens tel: */
  telLien: '+33699681957',
  zone: 'Basé à Lyon · 100 % à distance',
  delai: 'Réponse sous 24 h',
  /** fiche Google Business, par son identifiant Knowledge Graph (stable) */
  google: 'https://www.google.com/search?kgmid=/g/11zf9zzc34',
} as const;

export const footerColumns = [
  {
    title: 'Services',
    links: [
      { href: '/services/creation-site-internet/', label: 'Sites internet' },
      { href: '/services/automatisation/', label: 'Automatisations' },
      { href: '/#services', label: 'Développement' },
      { href: '/#services', label: 'SEO' },
    ],
  },
  {
    title: 'Agence',
    links: [
      { href: '/#agence', label: 'Votre interlocuteur' },
      { href: '/#realisations', label: 'Réalisations' },
      { href: '/#secteurs', label: 'Secteurs' },
      { href: '/#offres', label: 'Offres' },
      { href: '/#faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { href: 'mailto:contact@madaria.fr', label: 'contact@madaria.fr' },
      { href: '/#contact', label: 'Demander un devis' },
      { href: '/#contact', label: 'Demander un appel' },
    ],
  },
] as const;
