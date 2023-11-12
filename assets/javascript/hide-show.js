---
---

(function() {
    const toggle = document.querySelectorAll('.-js-toggle')

    Array.prototype.forEach.call(toggle, toggle => {
        let target = toggle.parentElement.nextElementSibling

        toggle.onclick = () => {
            let expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
            toggle.setAttribute('aria-expanded', !expanded);
            target.hidden = expanded;
            const reflow = target.offsetHeight;
            target.classList.toggle("-js-desc-hidden");
        }
    })
})()
