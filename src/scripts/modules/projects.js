import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Projects: desktop pins the section and turns vertical scroll into a sideways track
 * (with drifting mosaic columns + parallax inside each frame). Mobile keeps a native swipe carousel.
 */
export function initProjects(lenis) {
  const sec = document.querySelector('.pj');
  if (!sec) return;
  const track = sec.querySelector('.pj__track');
  const items = [...sec.querySelectorAll('.pj__item')];
  const count = sec.querySelector('.pj__count');
  const bar = sec.querySelector('.pj__bar i');
  let current = -1;
  const setCount = (i) => {
    if (i === current) return;
    current = i;
    count.textContent = String(i + 1).padStart(2, '0');
  };

  const mm = gsap.matchMedia();

  mm.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
    const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
    const tween = gsap.to(track, {
      x: () => -dist(),
      ease: 'none',
      scrollTrigger: {
        trigger: sec,
        pin: true,
        scrub: 0.9,
        end: () => `+=${dist()}`,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: (st) => {
          bar.style.transform = `scaleX(${st.progress})`;
          const edge = st.progress * dist() + window.innerWidth * 0.6;
          let idx = 0;
          items.forEach((it, i) => { if (it.offsetLeft <= edge) idx = i; });
          setCount(idx);
        },
      },
    });

    // mosaic columns drift in opposite directions
    sec.querySelectorAll('.pj__col').forEach((col, i) => {
      const up = i % 2 === 0;
      gsap.fromTo(col, { yPercent: up ? 6 : -10 }, {
        yPercent: up ? -16 : 8, ease: 'none',
        scrollTrigger: { trigger: col.parentElement, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true },
      });
    });

    // photo slides a little inside its frame
    sec.querySelectorAll('.pj__main img').forEach((img) => {
      gsap.fromTo(img, { xPercent: -5 }, {
        xPercent: 5, ease: 'none',
        scrollTrigger: { trigger: img.parentElement, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true },
      });
    });

    // big names ease in as each panel arrives
    items.forEach((item) => {
      gsap.from(item.querySelector('.pj__name'), {
        xPercent: 12, opacity: 0, ease: 'power3.out',
        scrollTrigger: { trigger: item, containerAnimation: tween, start: 'left 92%', end: 'left 45%', scrub: true },
      });
    });

    return () => gsap.set(track, { clearProps: 'transform' });
  });

  mm.add('(max-width: 900px), (prefers-reduced-motion: reduce)', () => {
    const onScroll = () => {
      const max = track.scrollWidth - track.clientWidth;
      bar.style.transform = `scaleX(${max > 0 ? track.scrollLeft / max : 0})`;
      const edge = track.scrollLeft + track.clientWidth * 0.4;
      let idx = 0;
      items.forEach((it, i) => { if (it.offsetLeft <= edge) idx = i; });
      setCount(idx);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => track.removeEventListener('scroll', onScroll);
  });

  initGalleries(lenis);
}

/** Full-screen photo strip per project. */
function initGalleries(lenis) {
  document.querySelectorAll('[data-gallery]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const dlg = document.getElementById(btn.dataset.gallery);
      if (!dlg || dlg.open) return;
      lenis?.stop();
      dlg.showModal();
      dlg.querySelector('.gal__strip').scrollLeft = 0;
    });
  });

  document.querySelectorAll('.gal').forEach((dlg) => {
    const strip = dlg.querySelector('.gal__strip');
    const figs = [...strip.children];
    const n = dlg.querySelector('.gal__n');
    const [prev, next] = dlg.querySelectorAll('.gal__btn');

    const index = () => {
      const mid = strip.scrollLeft + strip.clientWidth / 2;
      let best = 0, d = Infinity;
      figs.forEach((f, i) => {
        const c = f.offsetLeft + f.offsetWidth / 2;
        if (Math.abs(c - mid) < d) { d = Math.abs(c - mid); best = i; }
      });
      return best;
    };
    const update = () => {
      const i = index();
      n.textContent = String(i + 1).padStart(2, '0');
      prev.disabled = i === 0;
      next.disabled = i === figs.length - 1;
    };
    const go = (dir) => {
      const f = figs[Math.min(figs.length - 1, Math.max(0, index() + dir))];
      strip.scrollTo({ left: f.offsetLeft + f.offsetWidth / 2 - strip.clientWidth / 2, behavior: 'smooth' });
    };

    strip.addEventListener('scroll', update, { passive: true });
    prev.addEventListener('click', () => go(-1));
    next.addEventListener('click', () => go(1));
    dlg.querySelector('.gal__close').addEventListener('click', () => dlg.close());
    dlg.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    });
    // a mouse wheel steps through the photos (one per notch-burst)
    let lock = 0;
    strip.addEventListener('wheel', (e) => {
      const d = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : 0;
      if (!d) return;
      e.preventDefault();
      const now = performance.now();
      if (now < lock || Math.abs(d) < 4) return;
      lock = now + 420;
      go(d > 0 ? 1 : -1);
    }, { passive: false });
    dlg.addEventListener('close', () => lenis?.start());
    update();
  });
}
