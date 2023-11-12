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
                // console.log('work page');
            }
        }, {
            namespace: 'about',
            beforeEnter(data) {
                // console.log('about page');
            }
        }, {
            namespace: 'resume',
            beforeEnter(data) {
                // console.log('resume page');
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
