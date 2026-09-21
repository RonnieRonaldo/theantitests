(() => {
  'use strict';
  const form = document.getElementById('enquiry-form');
  if (!form) return;
  const email = String(window.ANTI_TESTS_CONTACT_EMAIL || '').trim();
  const configured = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const status = document.getElementById('contact-status');
  const feedback = document.getElementById('enquiry-feedback');
  if (configured) {
    status.textContent = 'Email Simon at ';
    const link = document.createElement('a');
    link.href = 'mailto:' + email;
    link.textContent = email;
    status.append(link, '. Or prepare a message below and open it in your email app. You review and send it there.');
    document.getElementById('enquiry-submit').textContent = 'Open my email app ↗';
  }
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const topic = document.getElementById('enquiry-type').value;
    const message = document.getElementById('enquiry-message').value.trim();
    if (!message) { feedback.textContent = 'Please write a message first.'; return; }
    if (configured) {
      window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(topic) + '&body=' + encodeURIComponent(message);
      feedback.textContent = 'Your email app should open with a draft. Nothing has been sent yet. If it does not open, copy your message and use the email address above.';
    } else {
      try {
        await navigator.clipboard.writeText(topic + '\n\n' + message);
        feedback.textContent = 'Draft copied. It has not been sent. Contact details will be available here once updated.';
      } catch (_) {
        document.getElementById('enquiry-message').select();
        feedback.textContent = 'Please copy the selected message manually. Nothing has been sent.';
      }
    }
  });
})();
