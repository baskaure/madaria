/** Apparitions sans lecture synchrone de la géométrie pendant le scroll. */
export function initReveal() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>('.rv'));
  const calm = matchMedia('(prefers-reduced-motion: reduce)');
  if (calm.matches || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
        entry.target.classList.remove('rv-pending');
        observer.unobserve(entry.target);
      } else {
        // Préparer uniquement les blocs hors écran. Masquer puis réafficher
        // le hero déjà visible redessine ses flous et sa vidéo au chargement.
        entry.target.classList.add('rv-pending');
      }
    });
  }, { rootMargin: '0px 0px 60px 0px' });
  elements.forEach(el => observer.observe(el));
  calm.addEventListener('change', e => {
    if (e.matches) { elements.forEach(el => el.classList.remove('rv-pending')); observer.disconnect(); }
  });
}
