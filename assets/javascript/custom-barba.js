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
                    targets: '.content',
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 1500
                })
                .add({
                    targets: '.intro__desc',
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 750
                }, '-=1000')
                .add({
                    targets: '.project',
                    translateY: [250, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(100)
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
                    delay: anime.stagger(250)
                }, '-=1000');
            }
        }, {
            namespace: 'resume',
            beforeEnter(data) {
                var customResumeTimeline = anime.timeline();
                
                customResumeTimeline.add({
                    targets: '.content',
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 750
                })
                .add({
                    targets: '.example, .section-title',
                    translateY: [10, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(250)
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
