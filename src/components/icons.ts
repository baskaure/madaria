/** Contenu interne des icônes, dessinées sur une grille 24×24 en trait. */
export const icons = {
  site: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 13h6"/>',
  auto: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/><circle cx="12" cy="12" r="3"/>',
  dev: '<path d="M8 6l-5 6 5 6M16 6l5 6-5 6"/>',
  seo: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  ops: '<path d="M12 3l8 4v6c0 4.5-3.2 7.4-8 8.5C7.2 20.4 4 17.5 4 13V7z"/><path d="M9 12l2 2 4-4"/>',
  data: '<path d="M4 19V5M4 19h16M8 15v-4M12 15V8M16 15v-6"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',

  // pictos d'interface, à la place des caractères flèche que iOS remplace
  // par des emojis (↗ notamment)
  arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  arrowUpRight: '<path d="M7 17L17 7M8 7h9v9"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',

  // secteurs
  barbier: '<path d="M3 8h18v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/><path d="M7 8V5M11 8V5M15 8V5M19 8V5"/>',
  coiffeur: '<circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><path d="M8.1 7.4L20 18M8.1 16.6L20 6"/>',
  tatoueur: '<path d="M17 3l4 4L8 20H4v-4z"/><path d="M14 6l4 4"/>',
  restaurant: '<path d="M7 3v18M4 3v6a3 3 0 0 0 6 0V3"/><path d="M17.5 3c-1.7 1.6-2.5 3.6-2.5 5.6s.8 3.4 2.5 3.4v9"/>',
  esthetique: '<path d="M12 3s6 6.5 6 10.5a6 6 0 0 1-12 0C6 9.5 12 3 12 3z"/>',
  formation: '<path d="M12 4L2 9l10 5 10-5z"/><path d="M6 11.5V17c0 1.6 3 3 6 3s6-1.4 6-3v-5.5"/>',
  perceur: '<circle cx="12" cy="13" r="6.5"/><circle cx="12" cy="4.5" r="2"/>',
  btp: '<path d="M3 18h18M5 18v-3a7 7 0 0 1 14 0v3"/><path d="M10 8.2V5h4v3.2"/>',
} as const;

export type IconName = keyof typeof icons;

/** Même icône en chaîne HTML, pour le contenu injecté par script. */
export const iconHtml = (name: IconName) =>
  `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;
