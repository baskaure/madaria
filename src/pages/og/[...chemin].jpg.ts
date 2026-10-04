import type { APIRoute } from 'astro';
import { cartes, nomFichier, rendre, type Carte } from '../../lib/og';

export async function getStaticPaths() {
  return (await cartes()).map((c) => ({ params: { chemin: nomFichier(c.page) }, props: { c } }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(new Uint8Array(await rendre((props as { c: Carte }).c)), { headers: { 'Content-Type': 'image/jpeg' } });
