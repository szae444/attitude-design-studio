/**
 * Projects: the section scrolls like any other; the full grid opens only when asked
 * ("View projects" or the preview wall). Native <dialog> gives focus trapping and Esc;
 * page scrolling pauses while it's open.
 */
export function initProjects(lenis) {
  const dlg = document.getElementById('pj-all');
  if (!dlg) return;
  const root = document.documentElement;

  const open = () => {
    if (dlg.open) return;
    dlg.showModal();
    dlg.scrollTop = 0;
    if (lenis) lenis.stop();
    root.style.overflow = 'hidden';
  };
  const resume = () => {
    root.style.overflow = '';
    if (lenis) lenis.start();
  };
  // resume right away (the 'close' event is async and an anchor scroll may follow in the same click)
  const close = () => { if (dlg.open) { dlg.close(); resume(); } };

  document.querySelectorAll('[data-pj-open]').forEach((b) => b.addEventListener('click', open));
  // capture phase: close before the smooth-scroll anchor handler runs, so "Start a project" can scroll
  dlg.querySelectorAll('[data-pj-close]').forEach((b) => b.addEventListener('click', close, true));
  dlg.addEventListener('close', resume); // Esc
}
