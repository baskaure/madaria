/**
 * Apparition progressive des blocs `.rv` au défilement.
 *
 * Volontairement basé sur un contrôle à chaque frame de scroll plutôt que sur
 * IntersectionObserver : lors d'une pichenette sur mobile, un bloc peut
 * traverser l'écran entre deux passages de l'observateur et rester invisible.
 * Ici, tout bloc dont le haut est passé au-dessus du seuil est révélé, quoi
 * qu'il arrive.
 */
export function initReveal() {
  let restants = Array.from(document.querySelectorAll<HTMLElement>('.rv'));
  if (!restants.length) return;

  restants.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i, 4) * 38}ms`;
  });

  let planifie = false;

  const verifier = () => {
    planifie = false;
    const seuil = window.innerHeight - 30;
    restants = restants.filter((el) => {
      if (el.getBoundingClientRect().top >= seuil) return true;
      el.classList.add('in');
      return false;
    });
    if (!restants.length) {
      window.removeEventListener('scroll', demander);
      window.removeEventListener('resize', demander);
    }
  };

  const demander = () => {
    if (planifie) return;
    planifie = true;
    requestAnimationFrame(verifier);
  };

  verifier();
  window.addEventListener('scroll', demander, { passive: true });
  window.addEventListener('resize', demander, { passive: true });
}
