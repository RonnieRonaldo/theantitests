(() => {
  'use strict';
  const form = document.getElementById('enquiry-form');
  if (!form) return;
  const topic = document.getElementById('enquiry-type');
  const button = document.getElementById('enquiry-submit');
  const feedback = document.getElementById('enquiry-feedback');
  const labels = { custom: 'Custom quiz — US$200', idea: 'Suggest a quiz', question: 'Question or technical problem' };
  const requested = new URLSearchParams(window.location.search).get('topic');
  if (Object.hasOwn(labels, requested)) topic.value = requested;
  function hints() {
    document.getElementById('custom-hint').hidden = topic.value !== 'custom';
    document.getElementById('problem-hint').hidden = topic.value !== 'question';
  }
  topic.addEventListener('change', hints);
  hints();
  let sending = false;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending || !form.reportValidity()) return;
    if (form.elements.botcheck.checked) return;
    sending = true;
    button.disabled = true;
    button.textContent = 'Sending…';
    form.setAttribute('aria-busy', 'true');
    feedback.textContent = 'Sending your message. One moment of optimism.';
    const data = Object.fromEntries(new FormData(form));
    data.topic = labels[topic.value] || labels.question;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(form.action, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data), signal: controller.signal
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Submission not confirmed');
      feedback.textContent = 'Message sent. Thank you — your observations have reached the complaints department. That is also me.';
      form.reset();
      hints();
    } catch (error) {
      feedback.textContent = 'We could not confirm that your message was sent. Your text is still here. Check your connection and try again in a moment. If the connection dropped after sending, it may already have arrived.';
    } finally {
      clearTimeout(timeout);
      sending = false;
      button.disabled = false;
      button.textContent = 'Send my message ↗';
      form.removeAttribute('aria-busy');
      feedback.focus();
    }
  });
})();
