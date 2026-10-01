/**
 * Cartes projet (CarteProjet.astro). Souris : au survol, le défilement filmé
 * joue s'il existe, sinon la capture de la page entière (chargée à ce
 * moment-là seulement) défile dans le cadre. Écran tactile : la classe
 * `.actif` reproduit le survol quand la carte occupe l'écran.
 */
import { brancher, jouer, arreter } from './videoDefile';

export function initProjets() {
  const cartes = Array.from(document.querySelectorAll<HTMLElement>('.projet'));
  if (!cartes.length) return;
  const calme = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const souris = matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (calme) return;

  // la capture « page entière », plus lourde, ne se charge qu'au moment où elle sert
  const chargerComplete = (carte: HTMLElement) =>
    new Promise<void>((fini) => {
      const img = carte.querySelector<HTMLImageElement>('img[data-full]');
      if (!img?.dataset.full) return fini();
      img.removeAttribute('srcset');
      img.removeAttribute('sizes');
      img.addEventListener('load', () => fini(), { once: true });
      img.addEventListener('error', () => fini(), { once: true });
      img.src = img.dataset.full;
      delete img.dataset.full;
    });

  if (souris) {
    cartes.forEach((c) => {
      const v = c.querySelector<HTMLVideoElement>('video.defile');
      if (v) {
        brancher(v);
        c.addEventListener('pointerenter', () => jouer(v));
        c.addEventListener('pointerleave', () => arreter(v));
      } else {
        c.addEventListener('pointerenter', () => chargerComplete(c), { once: true });
      }
    });
    return;
  }

  // tactile : pas de vidéo à charger pour chaque carte, la capture défile
  const io = new IntersectionObserver(
    (entrees) =>
      entrees.forEach((e) => {
        const c = e.target as HTMLElement;
        c.dataset.vu = e.isIntersecting ? '1' : '';
        if (!e.isIntersecting) return c.classList.remove('actif');
        chargerComplete(c).then(() => {
          if (c.dataset.vu) c.classList.add('actif');
        });
      }),
    { threshold: 0.6 },
  );
  cartes.forEach((c) => io.observe(c));
}
