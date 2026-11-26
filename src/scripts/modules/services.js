import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Opening/closing a service row changes the page height, so re-measure the scroll triggers below it. */
export function initServices() {
  document.querySelectorAll('.svc details').forEach((d) => d.addEventListener('toggle', () => ScrollTrigger.refresh()));
  // links to #additional (nav, menu) open row 07 so the add-ons are visible on arrival
  const add = document.querySelector('#additional details');
  if (add) document.querySelectorAll('a[href="#additional"]').forEach((a) => a.addEventListener('click', () => { add.open = true; }));
}
