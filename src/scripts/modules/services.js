import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Opening/closing a service row changes the page height, so re-measure the scroll triggers below it. */
export function initServices() {
  document.querySelectorAll('.svc details').forEach((d) => d.addEventListener('toggle', () => ScrollTrigger.refresh()));
}
