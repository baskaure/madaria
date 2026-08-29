/** Contenu interne des icônes, dessinées sur une grille 24×24 en trait. */
export const icons = {
  site: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 13h6"/>',
  auto: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/><circle cx="12" cy="12" r="3"/>',
  dev: '<path d="M8 6l-5 6 5 6M16 6l5 6-5 6"/>',
  seo: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  ops: '<path d="M12 3l8 4v6c0 4.5-3.2 7.4-8 8.5C7.2 20.4 4 17.5 4 13V7z"/><path d="M9 12l2 2 4-4"/>',
  data: '<path d="M4 19V5M4 19h16M8 15v-4M12 15V8M16 15v-6"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
} as const;

export type IconName = keyof typeof icons;
