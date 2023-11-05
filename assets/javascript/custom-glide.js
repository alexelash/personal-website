---
---
(function() {
    const glides = document.querySelectorAll(".glide");

    Object.values(glides).map(glideEl => {
        const glide = new Glide(glideEl, {
            type: "carousel",
            startAt: 0,
            perView: 1,
            focusAt: "center",
            gap: 0
        }).mount();

        glide.on('run', function( moveAmount ) {
            console.log(this); 
        })
    });
})()