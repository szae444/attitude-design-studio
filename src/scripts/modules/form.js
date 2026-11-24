/** Contact form: inline validation + async submit to the configured endpoint (Formspree-compatible). */
export function initForm() {
  const form = document.querySelector('.form');
  if (!form) return;
  const status = form.querySelector('.form__status');
  const button = form.querySelector('.form__submit');
  const endpoint = form.dataset.endpoint;
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

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const bad = [...form.querySelectorAll('[required]')].filter((el) => !check(el));
    if (bad.length) { say('Please complete the highlighted fields.', true); bad[0].focus(); return; }
    if (form.elements._gotcha.value) return; // honeypot: bots fill hidden fields
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
