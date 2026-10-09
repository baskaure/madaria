import type { APIRoute } from 'astro';
import { secteurs } from '../data/secteurs';
import { realisations } from '../data/realisations';
import { prestations } from '../data/prestations';
import { offres, prixEntree, achatEntree, conditionsOffres } from '../data/offres';
import { services } from '../data/services';
import { questions } from '../data/faq';
import { contact } from '../data/site';
import { tousLesGuides } from '../lib/guides';
import { villes } from '../data/villes';

const BASE = 'https://madaria.fr';

/**
 * /llms.txt — convention émergente destinée aux moteurs de réponse : un résumé
 * factuel du site en markdown, plus facile à extraire qu'une page HTML.
 * Généré depuis les mêmes données que le site, donc jamais désynchronisé.
 */
export const GET: APIRoute = async () => {
  const l: string[] = [];

  l.push('# Madaria');
  l.push('');
  l.push(
    `> Agence digitale basée à Lyon (France), spécialisée dans les sites vitrines à partir de ${prixEntree} en abonnement (création incluse) ou ${achatEntree} en une fois, avec un planning de 7 jours selon périmètre et réception des éléments nécessaires. Également : automatisation et outils métier sur devis. Intervient partout en France, à distance.`,
  );
  l.push('');

  l.push('## Faits');
  l.push('');
  l.push('- Nom : Madaria');
  l.push('- Fondateur : Aurélien Branco, entrepreneur individuel (SIREN 989 121 843)');
  l.push('- Localisation : Lyon, Auvergne-Rhône-Alpes, France');
  l.push('- Zone desservie : Lyon et toute la France, à distance');
  l.push('- Activité : création de sites internet, automatisation, développement sur-mesure');
  l.push('- Délai de livraison : 7 jours pour un site vitrine, après accord sur le devis et réception des contenus');
  l.push(`- Prix d’entrée : ${prixEntree} en abonnement, création incluse, ou ${achatEntree} en une fois`);
  l.push('- Maquette : incluse dans la prestation, validée avant tout développement');
  l.push(`- Contact : ${contact.email} · ${contact.tel}`);
  l.push('- Devis : gratuit, chiffré sous 24 heures, le devis n\'engage à rien');
  l.push('');

  l.push('## Offres et tarifs');
  l.push('');
  for (const o of offres) {
    const prix = o.unite ? `${o.prix} ${o.unite}` : o.prix;
    l.push(`### ${o.nom} — ${prix}`);
    if (o.achat) l.push(`Ou ${o.achat} € HT en une fois.`);
    l.push(o.accroche);
    l.push('');
    for (const i of o.inclus) l.push(`- ${i}`);
    l.push('');
  }

  for (const condition of conditionsOffres) l.push(condition);
  l.push('');
  l.push('## Réalisations');
  for (const p of realisations) l.push(`- [${p.nom}](${BASE}/realisations/${p.id}/) : ${p.accroche}`);
  l.push('');
  l.push('## Services');
  for (const p of prestations) l.push(`- [${p.titre}](${BASE}/services/${p.slug}/)`);
  l.push('');
  for (const s of services) l.push(`- **${s.title}** : ${s.text}`);
  l.push('');

  l.push('## Métiers accompagnés');
  l.push('');
  for (const s of secteurs) {
    l.push(`- [${s.nom}](${BASE}/site-internet/${s.slug}/) : ${s.text}`);
  }
  l.push('');

  l.push('## Questions fréquentes');
  l.push('');
  for (const q of questions) {
    l.push(`### ${q.q}`);
    l.push(q.r);
    l.push('');
  }

  l.push('## Pages');
  l.push('');
  l.push(`- [Accueil](${BASE}/) : offre complète, méthode, tarifs, contact`);
  for (const s of secteurs) {
    l.push(`- [${s.h1}](${BASE}/site-internet/${s.slug}/) : ${s.metaDesc}`);
  }
  for (const v of villes) l.push(`- [Création de site internet ${v.a}](${BASE}/creation-site-internet/${v.slug}/) : ${v.metaDesc}`);
  l.push(`- [Réalisations](${BASE}/realisations/) : les projets livrés, avec captures`);
  l.push(`- [À propos](${BASE}/a-propos/) : Aurélien Branco, fondateur de Madaria`);
  l.push(`- [Guides](${BASE}/guides/) : prix, référencement local, conseils pour indépendants et TPE`);
  for (const g of await tousLesGuides()) l.push(`- [${g.data.titre}](${BASE}/guides/${g.id}/) : ${g.data.description}`);
  l.push(`- [Mentions légales](${BASE}/mentions-legales/)`);
  l.push(`- [Politique de confidentialité](${BASE}/confidentialite/)`);
  l.push('');

  return new Response(l.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
