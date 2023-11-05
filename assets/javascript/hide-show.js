---
---

(function() {
    const toggle = document.querySelectorAll('.-js-toggle')

    Array.prototype.forEach.call(toggle, toggle => {
        let target = toggle.parentElement.nextElementSibling

        toggle.onclick = () => {
            let expanded = toggle.getAttribute('aria-expanded') === 'true' || false

        console.log(toggle);

            toggle.setAttribute('aria-expanded', !expanded)
            target.hidden = expanded    
        }
    })
})()
