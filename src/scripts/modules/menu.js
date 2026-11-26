/** Overlay menu (all screen sizes): toggle, Esc to close, closes on link tap, pauses scrolling while open. */
export function initMenu(lenis) {
  const btn = document.querySelector('.nav__menu');
  const menu = document.getElementById('menu');
  if (!btn || !menu) return () => {};
  const root = document.documentElement;
  const label = btn.querySelector('.nav__menu-t');

  const set = (open) => {
    root.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    if (label) label.textContent = open ? 'Close' : 'Menu';
    if (lenis) {
      if (open) lenis.stop();
      else lenis.start();
    } else {
      document.body.style.overflow = open ? 'hidden' : '';
    }
  };
  const close = () => { if (root.classList.contains('menu-open')) set(false); };

  btn.addEventListener('click', () => set(!root.classList.contains('menu-open')));
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  return close;
}
