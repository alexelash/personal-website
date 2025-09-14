(function() {
    var navButton = document.querySelector('.c-nav__trigger');

    navButton.addEventListener('click', function() {
        let expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
        let menu = this.parentElement.nextElementSibling;
        let page = document.querySelector('body');
    
        if (menu.classList.contains('-js-is-visible')) {
              menu.classList.remove('-js-is-visible');
        } else {
              menu.classList.add('-js-is-visible');
        }

        if (page.classList.contains('-js-mobile-nav-visible')) {
              page.classList.remove('-js-mobile-nav-visible');
        } else {
              page.classList.add('-js-mobile-nav-visible');
        }
    });
})()
