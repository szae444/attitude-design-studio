import gsap from 'gsap';

/** One-time hero entrance + gentle drift of the blurred photo on scroll. */
export function initHero(reduce) {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  if (reduce) {
    hero.classList.add('is-in');
    return;
  }

  const play = () => {
    gsap.timeline({ defaults: { ease: 'expo.out' } })
      .to('.hero__meta', { opacity: 1, duration: 1 }, 0)
      .fromTo('.hero__img', { scale: 1.28 }, { scale: 1.08, duration: 2.4, ease: 'power3.out' }, 0)
      .fromTo('.hero .mask > span', { y: 0, yPercent: 105 }, { yPercent: 0, duration: 1.3, stagger: 0.09 }, 0.15)
      .add(() => hero.classList.add('is-in'), 0.55)
      .to('.hero [data-enter]', { opacity: 1, y: 0, duration: 1.1, stagger: 0.08 }, 0.9);
  };
  // Wait for fonts so the line masks measure correctly, but never longer than 1.5s.
  const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
  Promise.race([fonts, new Promise((r) => setTimeout(r, 1500))]).then(play);

  gsap.to('.hero__img', {
    yPercent: 10, ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
  });
}
