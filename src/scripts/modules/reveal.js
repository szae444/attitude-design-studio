import gsap from 'gsap';

/** Big headings rise in once as they enter the viewport. */
export function initReveals(reduce) {
  if (reduce) return;
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      yPercent: 18, opacity: 0, duration: 1.2, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });
}

/** Touch devices have no hover, so work cards bloom to colour while they sit mid-screen. */
export function initTouchCards() {
  if (!window.matchMedia('(hover: none)').matches || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.target.classList.toggle('is-active', e.isIntersecting)),
    { rootMargin: '-35% 0px -35% 0px' },
  );
  document.querySelectorAll('.card').forEach((c) => io.observe(c));
}
