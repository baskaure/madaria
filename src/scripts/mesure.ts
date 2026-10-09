/**
 * Événements Umami : ce qui mesure vraiment l'intérêt d'un visiteur.
 * Sans Umami chargé (identifiant vide, aperçu local), rien ne se passe.
 *   appel        clic sur un numéro de téléphone
 *   email        clic sur une adresse e-mail
 *   choix-offre  clic sur « Choisir Vitrine », « Choisir Visibilité »…
 *   devis        demande de devis envoyée (Contact.astro)
 *   presentation clic sur « Réserver mon appel de 15 min » (Cal.com)
 */
type Umami = { track: (evenement: string, donnees?: Record<string, string>) => void };

export const suivre = (evenement: string, donnees?: Record<string, string>) => {
  try {
    (window as unknown as { umami?: Umami }).umami?.track(evenement, donnees);
  } catch {}
};

/**
 * Provenance du visiteur (1re page de la visite) : paramètres utm_* des
 * pubs, fbclid, page d'arrivée et site d'origine. Gardée pour la session,
 * puis jointe à la demande de devis et au lien Cal.com, pour savoir quelle
 * pub a amené quel prospect.
 */
const CLE = 'madaria-provenance';
const lire = (): Record<string, string> => {
  try { return JSON.parse(sessionStorage.getItem(CLE) ?? '{}'); } catch { return {}; }
};
function memoriserProvenance() {
  const params = new URLSearchParams(location.search);
  const pub = [...params.keys()].some((k) => k.startsWith('utm_') || k === 'fbclid');
  // une arrivée par pub remplace la provenance ; sinon on garde la première
  if (!pub && Object.keys(lire()).length) return;
  const p: Record<string, string> = { arrivee: location.pathname };
  params.forEach((v, k) => { if (k.startsWith('utm_') || k === 'fbclid') p[k] = v.slice(0, 200); });
  if (document.referrer && !document.referrer.startsWith(location.origin)) p.origine = new URL(document.referrer).hostname;
  try { sessionStorage.setItem(CLE, JSON.stringify(p)); } catch {}
}
/** « utm_source=facebook · utm_campaign=plombier · arrivee=/pub/… » */
export const provenance = () =>
  Object.entries(lire()).map(([k, v]) => `${k}=${v}`).join(' · ');
/** Les utm_* de la visite, à ajouter au lien Cal.com (suivi des réservations). */
function marquerLiensPresentation() {
  const utm = Object.entries(lire()).filter(([k]) => k.startsWith('utm_'));
  if (!utm.length) return;
  document.querySelectorAll<HTMLAnchorElement>('a[data-presentation]').forEach((a) => {
    const url = new URL(a.href);
    utm.forEach(([k, v]) => url.searchParams.set(k, v));
    a.href = url.toString();
  });
}

export function initMesure() {
  memoriserProvenance();
  marquerLiensPresentation();
  document.addEventListener('click', (e) => {
    const lien = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href]');
    if (!lien) return;
    const page = location.pathname;
    if (lien.href.startsWith('tel:')) suivre('appel', { page });
    else if (lien.href.startsWith('mailto:')) suivre('email', { page });
    else if (lien.hasAttribute('data-presentation')) suivre('presentation', { page });
    else if (lien.dataset.offre) suivre('choix-offre', { offre: lien.dataset.offre, page });
  });
}
