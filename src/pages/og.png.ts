import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { cartes, rendre } from '../lib/og';

/** Image de partage générale (pages sans image propre, logo des données structurées). */
export const GET: APIRoute = async () => {
  const accueil = (await cartes()).find((c) => c.page === '/')!;
  const png = await sharp(await rendre(accueil)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
