(() => {
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('.main-nav');
  if (!button || !nav) return;

  function closeMenu() {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded','false');
    button.setAttribute('aria-label','Open navigation');
  }

  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeMenu();
      button.focus();
    }
  });
})();