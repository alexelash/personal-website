---
---

(function() {
    var lazyLoadInstance = new LazyLoad();
    
    const jsFiles = [
        'assets/javascript/anime.min.js',
        'assets/javascript/glide.min.js',
        'assets/javascript/card-click.js',
        'assets/javascript/custom-glide.js',
        'assets/javascript/hide-show.js',
        'assets/javascript/mobile-menu.js',
        'assets/javascript/vanilla-lazyload.js',
    ]

    barba.init({
        debug: true,
        cacheFirstPage: true,
        views: [{
            namespace: 'work',
            beforeEnter(data) {
                var customWorkTimeline = anime.timeline();
                
                customWorkTimeline.add({
                    targets: '.intro__blurb',
                    keyframes: [
                        {opacity: 0, delay: 150},
                        {translateY: 20},
                        {filter: 'grayscale(1)'},
                        {opacity: .1, delay: 150},
                        {translateY: 0},
                        {opacity: 1},
                        {filter: 'grayscale(0)', delay: 150}
                    ],
                    easing: 'easeOutExpo',
                    duration: 1500,
                })
                .add({
                    targets: '.intro__desc',
                    opacity: [0, 1],
                    translateY: [5, 0],
                    duration: 350,
                    delay: 250,
                })
                .add({
                    targets: '.project',
                    opacity: [0, 1],
                    rotate: [1, 0],
                    translateY: [20, 0],
                    delay: anime.stagger(250, {easing: 'easeOutQuad'})
                });
            }
        }, {
            namespace: 'about',
            beforeEnter(data) {
                var customAboutTimeline = anime.timeline();
                
                customAboutTimeline.add({
                    targets: '.content',
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 1500
                })
                .add({
                    targets: '.intro__content > *',
                    translateY: [10, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(150, {easing: 'easeOutQuad'})
                }, '-=1000')
                .add({
                    targets: '.intro__image-container',
                    rotate: [1, 0],
                    duration: 300,
                    easing: 'easeInOutSine',
                    delay: anime.stagger(250, {easing: 'easeOutQuad'})
                }, 0)
                .add({ 
                    targets: '.intro__image',
                    filter: ['grayscale(1)','grayscale(0)'],
                    duration: 200,
                    delay: anime.stagger(500, {easing: 'easeOutQuad'})
                }, 0)
            }
        }, {
            namespace: 'resume',
            beforeEnter(data) {
                var customResumeTimeline = anime.timeline();
                
                customResumeTimeline.add({
                    targets: '.example, .section-title',
                    translateY: [10, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(150, {easing: 'easeOutQuad'})
                });
            }
        }],
        transitions: [{
            name: 'default-transition',
            beforeEnter(data) {
                jsFiles.forEach((item) => {
                    const scriptEle = document.createElement('script');
                    scriptEle.src = item;
                    data.next.container.appendChild(scriptEle);
                })
            },
            enter(data) {
                lazyLoadInstance.update();
            }
        }],
        requestError: (trigger, action, url, response) => {
            if (action === 'click' && response.status && response.status === 404) {
                barba.go('/404');
            }
            return false;
        },
    });
})()
