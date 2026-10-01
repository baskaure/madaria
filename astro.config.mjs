// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { offres, ENGAGEMENT_MOIS, TAUX_HORAIRE } from './src/data/offres.ts';

/**
 * Jetons de prix dans les guides Markdown : {{vitrine.mensuel}} devient
 * « 49 € HT par mois », {{vitrine.achat}} « 690 € HT », {{engagement}}
 * « 12 mois ». Les prix ne sont écrits qu'une fois, dans src/data/offres.ts :
 * un changement de tarif met tous les articles à jour au build suivant.
 * Un jeton inconnu fait échouer le build plutôt que d'afficher {{…}}.
 */
const ESP = ' ';
const jetons = { engagement: `${ENGAGEMENT_MOIS} mois`, tauxHoraire: `${TAUX_HORAIRE}${ESP}€${ESP}HT de l'heure` };
for (const o of offres) {
  if (o.unite) jetons[`${o.id}.mensuel`] = `${o.prix}${ESP}€${ESP}HT par mois`;
  if (o.unite) jetons[`${o.id}.prix`] = o.prix;
  if (o.achat) jetons[`${o.id}.achat`] = `${o.achat}${ESP}€${ESP}HT`;
  // coût d'une année d'abonnement, et de l'engagement complet
  if (o.unite) {
    const n = Number(o.prix);
    const fmt = (v) => `${v.toLocaleString('fr-FR').replace(/\s/g, ESP)}${ESP}€${ESP}HT`;
    jetons[`${o.id}.an`] = fmt(n * 12);
    jetons[`${o.id}.engagementTotal`] = fmt(n * ENGAGEMENT_MOIS);
  }
}
function remarkJetons() {
  const re = /\{\{([\w.-]+)\}\}/g;
  const remplacer = (texte) =>
    texte.replace(re, (_, cle) => {
      if (!(cle in jetons)) throw new Error(`Jeton de prix inconnu dans un guide : {{${cle}}}`);
      return jetons[cle];
    });
  const visiter = (n) => {
    if (typeof n.value === 'string') n.value = remplacer(n.value);
    n.children?.forEach(visiter);
  };
  return (arbre) => visiter(arbre);
}

export default defineConfig({
  site: 'https://madaria.fr',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/merci/') })],
  build: { inlineStylesheets: 'auto' },
  markdown: { remarkPlugins: [remarkJetons] },
});
