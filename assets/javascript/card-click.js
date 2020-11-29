---
---

(function() {
    // Accessible Card click
    // Adapted from https://inclusive-components.design/cards/
    const cards = document.querySelectorAll('.project--has-casestudy');
    if (cards) {
        cards.forEach.call(cards, card => {
            let down, up, link = card.querySelector('.project__button--casestudy');
            card.style.cursor = 'pointer';
            card.onmousedown = (e) => down = +new Date();
            card.onmouseup = (e) => {
                up = +new Date();
                if ((up - down) < 200) {
                    if (e.shiftKey || e.ctrlKey || e.metaKey) {
                        window.open(link, '_blank');
                    } else {
                        window.location = link;
                    }
                }
            }
        });
    }
})()
