import { getCollection, type CollectionEntry } from 'astro:content';

export type Guide = CollectionEntry<'guides'>;

/** Guides du plus récent au plus ancien. */
export const tousLesGuides = async () =>
  (await getCollection('guides')).sort((a, b) => b.data.publie.getTime() - a.data.publie.getTime());

/** Temps de lecture arrondi, à 220 mots par minute. */
export const lecture = (g: Guide) => Math.max(1, Math.round((g.body ?? '').split(/\s+/).length / 220));

/** « 1er octobre 2026 », « 14 octobre 2026 » */
export const dateFr = (d: Date) =>
  d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).replace(/^1 /, '1er ');
