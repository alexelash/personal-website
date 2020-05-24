---
---

var navButton = document.querySelector('.c-nav__trigger');

navButton.addEventListener('click', function() {
  let expanded = this.getAttribute('aria-expanded') === 'true' || false;
  this.setAttribute('aria-expanded', !expanded);
  let menu = this.parentElement.nextElementSibling;

  if (menu.classList.contains('-js-mobile-nav-visible')) {
      menu.classList.remove('-js-mobile-nav-visible');
  } else {
      menu.classList.add('-js-mobile-nav-visible');
  }
});
