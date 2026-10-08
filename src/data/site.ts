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
  { href: '/guides/', label: 'Guides' },
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

/**
 * Mesure d'audience Umami (sans cookies, donc sans bandeau de consentement).
 * Coller ici l'identifiant du site (Umami > Paramètres > le site >
 * « Website ID ») et, si le compte est dans la région Europe, l'adresse du
 * script indiquée dans le code de suivi. Vide : aucun script n'est chargé.
 * Le script ne compte que les visites sur madaria.fr (pas l'aperçu local).
 */
export const umami = {
  id: 'd908aea5-c6e3-4a01-872e-f5d4f74bda6d',
  script: 'https://cloud.umami.is/script.js',
} as const;

/**
 * Prise de rendez-vous « Présentation 15 min » (Cal.com). Coller ici le lien
 * public de l'événement, par ex. https://cal.com/madaria/presentation-15-min.
 * Vide : les boutons restent sur la demande de devis (#contact).
 */
export const presentation = {
  lien: '',
} as const;

export const footerColumns = [
  {
    title: 'Services',
    links: [
      { href: '/services/creation-site-internet/', label: 'Sites internet' },
      { href: '/services/automatisation/', label: 'Automatisations' },
      { href: '/#services', label: 'Développement' },
      { href: '/#services', label: 'SEO' },
      { href: '/creation-site-internet/lyon/', label: 'Site internet à Lyon' },
      { href: '/creation-site-internet/montpellier/', label: 'Site internet à Montpellier' },
      { href: '/creation-site-internet/capbreton/', label: 'Site internet à Capbreton' },
    ],
  },
  {
    title: 'Agence',
    links: [
      { href: '/a-propos/', label: 'À propos' },
      { href: '/guides/', label: 'Guides' },
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
