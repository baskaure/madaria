export const site = {
  name: 'Madaria',
  domain: 'madaria.fr',
  title: 'Madaria — Agence digitale · Sites, automatisations, développement',
  description:
    "Madaria conçoit des sites internet performants, automatise vos process et développe les outils métier dont votre activité a besoin.",
} as const;

export const nav = [
  { href: '#services', label: 'Services' },
  { href: '#methode', label: 'Méthode' },
  { href: '#travaux', label: 'Travaux' },
  { href: '#offres', label: 'Offres' },
  { href: '#faq', label: 'FAQ' },
] as const;

export const contact = {
  email: 'contact@madaria.fr',
  tel: '06 99 68 19 57',
  /** même numéro au format international, pour les liens tel: */
  telLien: '+33699681957',
  zone: 'Basé à Lyon · 100 % à distance',
  delai: 'Réponse sous 24 h',
} as const;

export const budgets = [
  '1 500 – 3 000 €',
  '3 000 – 6 000 €',
  '6 000 – 15 000 €',
  '15 000 € et plus',
  'Je ne sais pas encore',
] as const;

// TODO : données fictives, à remplacer par de vraies références avant mise en ligne.
export const clients = [
  'Atelier Verel',
  'Norvia',
  'Cabinet Halden',
  'Groupe Astria',
  'Kimbo Studio',
  'Lumen & Co',
] as const;

export const footerColumns = [
  {
    title: 'Services',
    links: [
      { href: '#services', label: 'Sites internet' },
      { href: '#services', label: 'Automatisations' },
      { href: '#services', label: 'Développement' },
      { href: '#services', label: 'SEO' },
    ],
  },
  {
    title: 'Agence',
    links: [
      { href: '#methode', label: 'Méthode' },
      { href: '#travaux', label: 'Travaux' },
      { href: '#offres', label: 'Offres' },
      { href: '#faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { href: 'mailto:contact@madaria.fr', label: 'contact@madaria.fr' },
      { href: '#contact', label: 'Demander un devis' },
      { href: '#contact', label: 'Réserver un appel' },
    ],
  },
] as const;
