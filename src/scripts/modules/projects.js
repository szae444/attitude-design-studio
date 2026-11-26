import gsap from 'gsap';

/**
 * Projects: desktop pins the section and turns vertical scroll into a sideways track
 * (photo slides a little inside each cover frame). Mobile keeps a native swipe carousel.
 * The photo wall moves by itself in CSS (ui/Mosaic.astro).
 */
export function initProjects() {
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

    // photo slides a little inside its frame
    sec.querySelectorAll('.pj__frame img').forEach((img) => {
      gsap.fromTo(img, { xPercent: -5 }, {
        xPercent: 5, ease: 'none',
        scrollTrigger: { trigger: img.parentElement, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true },
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
}
