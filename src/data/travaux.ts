export type Projet = {
  secteur: string;
  nom: string;
  text: string;
  /** classe de dégradé de la vignette : w1 | w2 | w3 */
  visuel: 'w1' | 'w2' | 'w3';
  kpis: { valeur: string; label: string }[];
};

export const projets: Projet[] = [
  {
    secteur: 'E-commerce · Artisanat',
    nom: 'Atelier Verel',
    text: 'Refonte complète de la boutique et automatisation du suivi de commandes.',
    visuel: 'w1',
    kpis: [
      { valeur: '+164 %', label: 'commandes' },
      { valeur: '−70 %', label: 'temps admin' },
    ],
  },
  {
    secteur: 'SaaS · B2B',
    nom: 'Norvia',
    text: 'Site vitrine, espace client et connexion CRM livrés en trois semaines.',
    visuel: 'w2',
    kpis: [
      { valeur: '3 sem.', label: 'maquette → live' },
      { valeur: '×2,4', label: 'leads' },
    ],
  },
  {
    secteur: 'Services · Local',
    nom: 'Cabinet Halden',
    text: 'Prise de rendez-vous en ligne, relances automatiques et SEO local.',
    visuel: 'w3',
    kpis: [
      { valeur: '#1', label: 'sur 8 requêtes' },
      { valeur: '+38 %', label: 'rendez-vous' },
    ],
  },
];
