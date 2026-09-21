/* The Anti-Tests: consent-gated GA4. Include once on every HTML page. */
(() => {
  'use strict';
  const ID = 'G-0155LKV8WT';
  const KEY = 'theantitests-analytics-consent-v1';
  const TTL = 180 * 24 * 60 * 60 * 1000;
  const deny = {analytics_storage:'denied', ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied'};
  let choice = null, loaded = false, previousFocus = null;
  function stored() {
    try {
      const value = JSON.parse(localStorage.getItem(KEY));
      return value && ['accepted','rejected'].includes(value.choice) && Number.isFinite(value.at) && value.at <= Date.now() && Date.now() - value.at < TTL ? value.choice : null;
    } catch { return null; }
  }
  choice = stored();
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
  window.gtag('consent','default',deny);
  window['ga-disable-' + ID] = choice !== 'accepted';
  function loadAnalytics() {
    if (loaded || choice !== 'accepted') return;
    loaded = true;
    window['ga-disable-' + ID] = false;
    window.gtag('consent','update',{...deny, analytics_storage:'granted'});
    window.gtag('js', new Date());
    let referrer = '';
    try { const url = new URL(document.referrer); referrer = url.origin + url.pathname; } catch {}
    window.gtag('config',ID,{
      allow_google_signals:false,
      allow_ad_personalization_signals:false,
      page_location:location.origin + location.pathname,
      page_referrer:referrer,
      page_title:document.title
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    script.id = 'google-analytics-tag';
    document.head.appendChild(script);
  }
  function clearAnalyticsCookies() {
    const names = document.cookie.split(';').map(item=>item.split('=')[0].trim()).filter(name=>name === '_ga' || name.startsWith('_ga_') || name === '_gid' || name.startsWith('_gat'));
    const domains = ['', location.hostname, '.' + location.hostname];
    const parts = location.hostname.split('.');
    for(let i=1;i<parts.length-1;i++) domains.push('.'+parts.slice(i).join('.'));
    for (const name of names) for (const domain of domains) {
      document.cookie = name + '=; Max-Age=0; path=/' + (domain?'; domain='+domain:'') + '; SameSite=Lax';
    }
  }
  const panel = document.createElement('section');
  panel.className = 'analytics-banner';
  panel.setAttribute('aria-labelledby','analytics-title');
  panel.hidden = true;
  panel.innerHTML = '<div class="analytics-copy"><h2 id="analytics-title">A small question about cookies.</h2><p>May we use Google Analytics to understand visits and improve the site? Analytics cookies are optional. Both quizzes work without them. <a href="/privacy/">Privacy &amp; analytics</a></p></div><div class="analytics-actions"><button type="button" data-consent="rejected">Reject analytics</button><button type="button" data-consent="accepted">Accept analytics</button><button type="button" data-consent="close" hidden>Close</button></div>';
  document.body.appendChild(panel);
  const close = panel.querySelector('[data-consent="close"]');
  function openSettings(focus) {
    previousFocus = document.activeElement;
    panel.hidden = false;
    close.hidden = choice === null;
    if(focus) panel.querySelector('[data-consent="rejected"]').focus();
  }
  function hide() {
    panel.hidden = true;
    if (previousFocus && previousFocus !== document.body) previousFocus.focus();
  }
  panel.addEventListener('click',event=>{
    const button = event.target.closest('button[data-consent]');
    if(!button) return;
    const value = button.dataset.consent;
    if(value === 'close') { hide(); return; }
    choice = value;
    try { localStorage.setItem(KEY,JSON.stringify({choice,at:Date.now()})); } catch {}
    if(choice === 'accepted') loadAnalytics();
    else {
      window['ga-disable-' + ID] = true;
      clearAnalyticsCookies();
      if(loaded) {
        window.gtag('consent','update',deny);
        // Quiz progress is already saved by the quiz engine. Reload removes the running Google tag.
        location.reload();
      }
    }
    hide();
  });
  document.querySelectorAll('[data-analytics-settings]').forEach(button=>{
    button.hidden = false;
    button.addEventListener('click',()=>openSettings(true));
  });
  window.addEventListener('storage',event=>{
    if(event.key !== KEY) return;
    choice = stored();
    if(choice === 'accepted') {loadAnalytics(); hide();}
    else {
      window['ga-disable-' + ID] = true;
      clearAnalyticsCookies();
      if(loaded) location.reload();
      else if(choice === null) openSettings(false);
      else hide();
    }
  });
  if(choice === 'accepted') loadAnalytics();
  else { clearAnalyticsCookies(); if(choice === null) openSettings(false); }
})();
