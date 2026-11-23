import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

/** Lenis smooth scrolling (touch keeps native momentum), synced with GSAP. Returns null when motion is reduced. */
export function initSmoothScroll(reduce) {
  if (reduce) return null;
  const lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4) });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

/** In-page anchor links scroll smoothly (or natively when Lenis is off). */
export function initAnchors(lenis, onNavigate) {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = id === '#top' ? 0 : document.querySelector(id);
      if (target === null) return;
      e.preventDefault();
      if (onNavigate) onNavigate();
      if (lenis) lenis.scrollTo(target, { duration: 1.4 });
      else window.scrollTo({ top: target === 0 ? 0 : target.getBoundingClientRect().top + window.scrollY });
    });
  });
}
