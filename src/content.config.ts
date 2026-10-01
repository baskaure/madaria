import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Guides : un fichier Markdown par article dans src/content/guides/. Le nom du
 * fichier donne l'adresse (/guides/<nom>/). Les prix s'écrivent en jetons
 * ({{vitrine.mensuel}}, {{visibilite.achat}}, {{engagement}}…), remplacés au
 * build par les valeurs de src/data/offres.ts : voir astro.config.mjs.
 */
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    /** titre affiché (h1) */
    titre: z.string(),
    /** balise <title>, pensée pour la recherche (60 caractères environ) */
    title: z.string(),
    /** meta description (155 caractères environ) */
    description: z.string(),
    /** chapeau sous le titre */
    chapo: z.string(),
    categorie: z.string(),
    publie: z.coerce.date(),
    maj: z.coerce.date().optional(),
    /** pages métier liées (slugs de src/data/secteurs.ts) */
    metiers: z.array(z.string()).default([]),
  }),
});

export const collections = { guides };
