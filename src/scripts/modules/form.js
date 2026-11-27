import { openBooking } from './booking.js';

/**
 * Contact form → Calendly. The form validates inline; on submit it opens the Calendly scheduler with the
 * visitor's name/email filled in and the rest of the inquiry in the event's first booking question (a1),
 * so it reaches the studio together with the booked call. (If FORM_ENDPOINT is ever set, it posts there instead.)
 */
export function initForm() {
  const form = document.querySelector('.form');
  if (!form) return;
  const status = form.querySelector('.form__status');
  const button = form.querySelector('.form__submit');
  const { endpoint, booking } = form.dataset;
  const say = (msg, err = false) => { status.textContent = msg; status.classList.toggle('is-err', err); };

  const check = (el) => {
    const ok = el.checkValidity();
    el.closest('.f')?.classList.toggle('is-err', !ok);
    return ok;
  };
  form.querySelectorAll('[required]').forEach((el) => {
    el.addEventListener('blur', () => { if (el.value) check(el); });
    el.addEventListener('input', () => { if (el.closest('.f').classList.contains('is-err')) check(el); });
    el.addEventListener('change', () => check(el));
  });

  // Calendly tells the page when a time has been booked
  let waiting = false;
  let booked = false;
  window.addEventListener('message', (e) => {
    if (!waiting || e.origin !== 'https://calendly.com' || e.data?.event !== 'calendly.event_scheduled') return;
    booked = true;
    form.reset();
    say('Thank you! Your call is booked and your inquiry is in. Check your email for the details.');
  });
  // popup closed: either booked (message above) or left without picking a time
  new MutationObserver(() => {
    if (!waiting || document.querySelector('.calendly-overlay')) return;
    waiting = false;
    if (!booked) say('Your inquiry is sent once you pick a time. Press the button again whenever you’re ready.');
  }).observe(document.body, { childList: true });

  const summary = (f) => [
    `Company: ${f.company.value.trim()}`,
    `Country: ${f.country.value.trim()}`,
    `Inquiry: ${f.inquiry.value}`,
    `Budget: ${f.budget.value}`,
    '',
    f.message.value.trim(),
  ].join('\n');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const bad = [...form.querySelectorAll('[required]')].filter((el) => !check(el));
    if (bad.length) { say('Please complete the highlighted fields.', true); bad[0].focus(); return; }
    if (form.elements._gotcha.value) return; // honeypot: bots fill hidden fields
    const f = form.elements;

    if (!endpoint && booking) {
      const name = f.name.value.trim();
      const email = f.email.value.trim();
      const a1 = summary(f);
      button.disabled = true; say('Opening the calendar…');
      try {
        await openBooking(booking, { name, email, customAnswers: { a1 } });
        waiting = true; booked = false;
        say('Pick a time that works for you. Your details are already filled in.');
      } catch {
        // widget blocked: open the booking page with the answers carried in the link
        const u = new URL(booking);
        u.searchParams.set('name', name);
        u.searchParams.set('email', email);
        u.searchParams.set('a1', a1);
        window.open(u, '_blank', 'noopener');
        say('The calendar opened in a new tab. Pick a time there to send your inquiry.');
      } finally { button.disabled = false; }
      return;
    }
    if (!endpoint) { say('This form isn’t connected yet. Please reach us on Instagram or Facebook for now.', true); return; }

    button.disabled = true; say('Sending…');
    try {
      const res = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset(); form.classList.add('is-sent');
      say('Thank you! Your inquiry is in. We’ll get back to you shortly.');
    } catch {
      say('Something went wrong. Please try again, or message us on Instagram.', true);
    } finally { button.disabled = false; }
  });
}
