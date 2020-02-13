import Vue from 'vue';

let lazyImageObserver = null;

const startObserver = () => {
    if ('IntersectionObserver' in window && lazyImageObserver === null) {
        lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.classList.add('fade-in');
                    lazyImage.src = lazyImage.dataset.src;
                    if (lazyImage.dataset.largesrc) {
                        lazyImage.srcset = `${lazyImage.src} 1x, ${lazyImage.dataset.largesrc} 2x`;
                    }
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
    }
};

const placeholderSrc = (width, height) => `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;

Vue.directive('lazyload', {
    bind: (el, binding) => {
        el.setAttribute('src', placeholderSrc(binding.value.width, binding.value.height));
        startObserver();
    },
    inserted: (el, binding) => {
        if (lazyImageObserver !== null) {
            lazyImageObserver.observe(el);
        } else {
            el.setAttribute('src', el.getAttribute('data-src'));
        }
    },
});
