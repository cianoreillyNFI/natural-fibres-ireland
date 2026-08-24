(() => {
  const button = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (!button || !nav) return;
  const close = () => {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded','false');
    button.setAttribute('aria-label','Open navigation');
  };
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { close(); button.focus(); }
  });
  document.addEventListener('click', e => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !button.contains(e.target)) close();
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
})();