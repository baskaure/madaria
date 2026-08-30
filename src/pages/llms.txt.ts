import type { APIRoute } from 'astro';
import { secteurs } from '../data/secteurs';
import { offres } from '../data/offres';
import { services } from '../data/services';
import { questions } from '../data/faq';
import { contact } from '../data/site';

const BASE = 'https://madaria.fr';

/**
 * /llms.txt — convention émergente destinée aux moteurs de réponse : un résumé
 * factuel du site en markdown, plus facile à extraire qu'une page HTML.
 * Généré depuis les mêmes données que le site, donc jamais désynchronisé.
 */
export const GET: APIRoute = () => {
  const l: string[] = [];

  l.push('# Madaria');
  l.push('');
  l.push(
    "> Agence digitale basée à Lyon (France), spécialisée dans la création de sites internet sur-mesure livrés en 7 jours, à partir de 690 € HT. Également : automatisation de tâches métier et développement d'outils sur-mesure. Intervient partout en France, 100 % à distance.",
  );
  l.push('');

  l.push('## Faits');
  l.push('');
  l.push('- Nom : Madaria');
  l.push('- Fondateur : Aurélien Branco, entrepreneur individuel (SIREN 989 121 843)');
  l.push('- Localisation : Lyon, Auvergne-Rhône-Alpes, France');
  l.push('- Zone desservie : Lyon et toute la France, à distance');
  l.push('- Activité : création de sites internet, automatisation, développement sur-mesure');
  l.push('- Délai de livraison : 7 jours pour un site vitrine');
  l.push('- Prix d’entrée : 690 € HT');
  l.push('- Maquette : offerte et comprise dans le prix, validée avant tout développement');
  l.push(`- Contact : ${contact.email} · ${contact.tel}`);
  l.push('- Devis : gratuit, chiffré sous 24 heures, sans engagement');
  l.push('');

  l.push('## Offres et tarifs');
  l.push('');
  for (const o of offres) {
    const prix = o.unite ? `${o.prix} ${o.unite}` : o.prix;
    l.push(`### ${o.nom} — ${prix}`);
    l.push(o.accroche);
    l.push('');
    for (const i of o.inclus) l.push(`- ${i}`);
    l.push('');
  }

  l.push('## Services');
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
  l.push(`- [Mentions légales](${BASE}/mentions-legales/)`);
  l.push(`- [Politique de confidentialité](${BASE}/confidentialite/)`);
  l.push('');

  return new Response(l.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
