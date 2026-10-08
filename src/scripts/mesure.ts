/**
 * Événements Umami : ce qui mesure vraiment l'intérêt d'un visiteur.
 * Sans Umami chargé (identifiant vide, aperçu local), rien ne se passe.
 *   appel        clic sur un numéro de téléphone
 *   email        clic sur une adresse e-mail
 *   choix-offre  clic sur « Choisir Vitrine », « Choisir Visibilité »…
 *   devis        demande de devis envoyée (Contact.astro)
 *   presentation clic sur « Réserver ma présentation » (Cal.com)
 */
type Umami = { track: (evenement: string, donnees?: Record<string, string>) => void };

export const suivre = (evenement: string, donnees?: Record<string, string>) => {
  try {
    (window as unknown as { umami?: Umami }).umami?.track(evenement, donnees);
  } catch {}
};

export function initMesure() {
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
