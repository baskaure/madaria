/**
 * Vidéos de défilement des réalisations (`<id>-defile.webm|mp4`, produites
 * par scripts/captures-video.cjs). Partagé par les cartes, la fiche et la
 * page projet.
 *
 * Rien n'est téléchargé tant que la vidéo ne sert pas : les sources sont
 * posées au premier `jouer()` (`data-video` = chemin du projet, sans suffixe).
 * Le format suit la place réellement occupée en pixels d'écran : la version
 * carte (560 px, légère) jusqu'à 640 px, la version fiche (1000 px) au-delà,
 * et toujours la version carte sur téléphone (données mobiles). La
 * capture fixe reste dessous, et la vidéo n'apparaît (classe `.joue`) qu'une
 * fois qu'elle tourne vraiment : jamais d'écran noir pendant le chargement.
 * Mouvement réduit demandé : elle ne se lance pas du tout. Économie de
 * données ou connexion lente : pas de lecture automatique, le bouton reste.
 */
const calme = matchMedia('(prefers-reduced-motion: reduce)');

// AV1 d'abord (le plus léger), H.264 pour les navigateurs qui ne le lisent pas
const SOURCES = [
  ['webm', 'video/webm; codecs="av01.0.08M.08"'],
  ['mp4', 'video/mp4; codecs="avc1.640020"'],
] as const;

export const mouvementReduit = () => calme.matches;

/** Économie de données activée, ou réseau lent (Chrome, Android ; ailleurs : non). */
export function reseauLeger() {
  const c = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  return !!c && (!!c.saveData || /(^|-)2g$|^3g$/.test(c.effectiveType ?? ''));
}

function preparer(v: HTMLVideoElement) {
  const base = v.dataset.video;
  if (!base || v.dataset.pret === base) return;
  const pixels = v.getBoundingClientRect().width * Math.min(devicePixelRatio || 1, 2);
  const suffixe = innerWidth <= 760 || pixels <= 640 ? 'defile-carte' : 'defile';
  v.replaceChildren(
    ...SOURCES.map(([ext, type]) =>
      Object.assign(document.createElement('source'), { src: `${base}-${suffixe}.${ext}`, type }),
    ),
  );
  v.dataset.pret = base;
  v.load();
}

/** Branche une vidéo : visible seulement quand elle tourne. */
export function brancher(v: HTMLVideoElement) {
  v.muted = true;
  v.addEventListener('playing', () => v.classList.add('joue'));
}

export function jouer(v: HTMLVideoElement) {
  if (calme.matches) return;
  preparer(v);
  v.play().catch(() => {});
}

export function arreter(v: HTMLVideoElement, rembobiner = true) {
  v.pause();
  if (rembobiner) {
    v.classList.remove('joue');
    if (v.readyState) v.currentTime = 0;
  }
}

/** Change la vidéo d'un même élément (fiche : d'un projet à l'autre). */
export function changer(v: HTMLVideoElement, base: string) {
  if (v.dataset.video === base) return;
  arreter(v);
  v.dataset.video = base;
}

/**
 * Bouton pause / lecture posé sur une vidéo qui démarre seule (fiche, page
 * projet) : une animation automatique de plus de 5 s doit pouvoir s'arrêter.
 * Renvoie `false` tant que le visiteur a mis en pause, pour que la lecture
 * automatique ne la relance pas. Sur réseau léger, elle part en pause : un
 * clic suffit à la lancer.
 */
export function boutonPause(v: HTMLVideoElement, b: HTMLButtonElement) {
  let pauseVoulue = reseauLeger();
  const maj = () => {
    b.setAttribute('aria-pressed', String(pauseVoulue));
    b.setAttribute('aria-label', pauseVoulue ? 'Lire la vidéo' : 'Mettre la vidéo en pause');
  };
  b.hidden = calme.matches;
  maj();
  b.addEventListener('click', () => {
    pauseVoulue = !pauseVoulue;
    maj();
    if (pauseVoulue) arreter(v, false);
    else jouer(v);
  });
  return () => !pauseVoulue;
}
