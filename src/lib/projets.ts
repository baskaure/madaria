/**
 * Accès aux captures des réalisations (public/realisations/shots/), partagé
 * par le mur du haut de page, les cartes projet et la page de chaque projet.
 * Nommage des fichiers : voir l'en-tête de src/data/realisations.ts.
 */
import fs from 'node:fs';
import path from 'node:path';
import type { ImageMetadata } from 'astro';
import { realisations, type Realisation } from '../data/realisations';

const DOSSIER = path.resolve('public/realisations/shots');

/** Capture présente sur le disque au moment du build. */
export const existe = (id: string, vue: string) => fs.existsSync(path.join(DOSSIER, `${id}-${vue}.webp`));

/** Défilement filmé (scripts/captures-video.cjs) disponible. */
export const aVideo = (id: string) => fs.existsSync(path.join(DOSSIER, `${id}-defile.webm`));

/** Chemin public d'une capture, servie telle quelle. */
export const shot = (id: string, vue: string) => `/realisations/shots/${id}-${vue}.webp`;

// vignettes et vues mobiles, optimisées par astro:assets (tailles responsives)
const captures = import.meta.glob<ImageMetadata>('../../public/realisations/shots/*-{thumb,mobile}.webp', {
  eager: true,
  import: 'default',
});
export const capture = (id: string, vue: 'thumb' | 'mobile') =>
  captures[`../../public/realisations/shots/${id}-${vue}.webp`];

/** « kami-capbreton.fr » pour la barre d'adresse des cadres. */
export const hote = (url?: string) => {
  try {
    return url ? new URL(url).host.replace(/^www\./, '') : '';
  } catch {
    return '';
  }
};

export const projet = (id: string): Realisation => {
  const p = realisations.find((r) => r.id === id);
  if (!p) throw new Error(`Réalisation inconnue : ${id}`);
  return p;
};
