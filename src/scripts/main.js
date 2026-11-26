import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initSmoothScroll, initAnchors } from './modules/smooth.js';
import { initMenu } from './modules/menu.js';
import { initHero } from './modules/hero.js';
import { initReveals, initTouchCards } from './modules/reveal.js';
import { initServicePreview } from './modules/services.js';
import { initForm } from './modules/form.js';
import { initProjects } from './modules/projects.js';

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const lenis = initSmoothScroll(reduce);
const closeMenu = initMenu(lenis);
initAnchors(lenis, closeMenu);
initHero(reduce);
initReveals(reduce);
initTouchCards();
initServicePreview(reduce);
initForm();
initProjects(lenis);

// Re-measure once images and fonts settle (avoids misplaced triggers on slow mobile networks).
window.addEventListener('load', () => ScrollTrigger.refresh());
