/**
 * "Book a call": any link to Calendly opens Calendly's popup scheduler over the page instead of leaving the site.
 * The widget script/styles load on first click only (no third-party code or cookies until someone wants to book).
 * If the widget can't load (blocked, offline), the link opens the Calendly page in a new tab.
 */
const JS = 'https://assets.calendly.com/assets/external/widget.js';
const CSS = 'https://assets.calendly.com/assets/external/widget.css';
let loading;

function loadWidget() {
  if (window.Calendly) return Promise.resolve();
  if (loading) return loading;
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = CSS;
  document.head.appendChild(css);
  loading = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = JS;
    s.async = true;
    s.onload = () => (window.Calendly ? resolve() : reject());
    s.onerror = reject;
    document.head.appendChild(s);
  }).catch((e) => { loading = null; throw e; });
  return loading;
}

function popupUrl(href) {
  const u = new URL(href);
  u.searchParams.set('hide_gdpr_banner', '1');
  // match the site: ink background, paper text (applied if the Calendly plan allows colour changes)
  u.searchParams.set('background_color', '0c0c0b');
  u.searchParams.set('text_color', 'fbfaf7');
  u.searchParams.set('primary_color', 'fbfaf7');
  return u.toString();
}

let lenisRef = null;

/**
 * Open the Calendly popup. `prefill` = { name, email, customAnswers: { a1, … } } (a1 = the event's first booking question).
 * Resolves once the popup is showing; rejects if the widget couldn't load (the caller picks the fallback).
 */
export function openBooking(href, prefill) {
  return loadWidget().then(() => {
    window.Calendly.initPopupWidget(prefill ? { url: popupUrl(href), prefill } : { url: popupUrl(href) });
    lenisRef?.stop();
    // pause smooth scrolling while the popup is up; Calendly removes its overlay on close
    const mo = new MutationObserver(() => {
      if (!document.querySelector('.calendly-overlay')) { mo.disconnect(); lenisRef?.start(); }
    });
    mo.observe(document.body, { childList: true });
  });
}

export function initBooking(lenis, onOpen) {
  lenisRef = lenis;
  document.querySelectorAll('a[href^="https://calendly.com/"]').forEach((a) => {
    a.setAttribute('rel', 'noopener');
    a.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return; // let "open in new tab" work
      e.preventDefault();
      onOpen?.();
      openBooking(a.href).catch(() => window.open(a.href, '_blank', 'noopener'));
    });
    // warm up the widget when a visitor is about to click
    a.addEventListener('pointerenter', () => loadWidget().catch(() => {}), { once: true });
  });
}
