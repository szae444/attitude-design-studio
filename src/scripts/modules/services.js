import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Desktop: image preview follows the cursor over the services list. */
export function initServicePreview(reduce) {
  const preview = document.querySelector('.svc__preview');
  document.querySelectorAll('.svc details').forEach((d) => d.addEventListener('toggle', () => ScrollTrigger.refresh()));
  if (!preview || reduce || !window.matchMedia('(hover: hover) and (min-width: 901px)').matches) return;

  const imgs = [...preview.querySelectorAll('img')];
  const xTo = gsap.quickTo(preview, 'x', { duration: 0.6, ease: 'power3' });
  const yTo = gsap.quickTo(preview, 'y', { duration: 0.6, ease: 'power3' });
  gsap.set(preview, { xPercent: -50, yPercent: -50, scale: 0.85 });

  let px = -1;
  let py = -1;
  let current = null;
  // Hit-test under the cursor so the preview also hides when the list scrolls away (no pointerleave on scroll).
  const update = () => {
    const el = px < 0 ? null : document.elementFromPoint(px, py);
    const item = el ? el.closest('.svc__item') : null;
    if (item === current) return;
    current = item;
    if (item) imgs.forEach((i) => i.classList.toggle('on', i.dataset.key === item.dataset.img));
    gsap.to(preview, item
      ? { opacity: 1, scale: 1, duration: 0.5, ease: 'expo.out', overwrite: true }
      : { opacity: 0, scale: 0.85, duration: 0.35, ease: 'power3.out', overwrite: true });
  };
  window.addEventListener('pointermove', (e) => {
    px = e.clientX;
    py = e.clientY;
    xTo(px + 190);
    yTo(py);
    update();
  }, { passive: true });
  window.addEventListener('scroll', update, { passive: true });
  document.addEventListener('pointerleave', () => { px = -1; update(); });
}
