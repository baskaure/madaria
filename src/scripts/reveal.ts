/** Apparition progressive des blocs marqués `.rv` au défilement. */
export function initReveal() {
  const cibles = document.querySelectorAll<HTMLElement>('.rv');
  if (!cibles.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' },
  );

  cibles.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i, 4) * 38}ms`;
    io.observe(el);
  });
}
