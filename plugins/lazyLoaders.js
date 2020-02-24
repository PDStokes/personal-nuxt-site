import Vue from 'vue';

const observerMap = new Map();
const placeholderSrc = (width, height) => `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;

const loadImage = (entries, observer) => {
    return entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            const lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            if (lazyImage.dataset.largesrc) {
                lazyImage.srcset = `${lazyImage.src} 1x, ${lazyImage.dataset.largesrc} 2x`;
            }
            if (lazyImage.dataset.fade) {
                lazyImage.classList.add('fade-in');
            }
            observer.unobserve(lazyImage);
        }
    });
};

const loadItem = (entries, observer) => {
    return entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            const elemItem = entry.target;
            elemItem.classList.add('fade-in');
            observer.unobserve(elemItem);
        }
    });
};

const startObserver = (observerType) => {
    if ('IntersectionObserver' in window) {
        if (!observerMap.has(observerType)) {
            const intObserver = new IntersectionObserver(function (entries, observer) {
                if (observerType === 'image') {
                    loadImage(entries, observer);
                } else {
                    loadItem(entries, observer);
                }
            });
            observerMap.set(observerType, intObserver);
        }
    }
};

Vue.directive('lazyload', {
    bind: (el, binding) => {
        const defaults = binding.value ? { ...binding.value } : { width: 1, height: 1 };
        el.setAttribute('src', placeholderSrc(defaults.width, defaults.height));
        startObserver('image');
    },
    inserted: (el, binding) => {
        if (observerMap.has('image')) {
            observerMap.get('image').observe(el);
        } else {
            el.setAttribute('src', el.getAttribute('data-src'));
        }
    },
});

Vue.directive('scroll', {
    bind: (el, binding) => {
        const defaults = binding.value ? { ...binding.value } : { delay: 0.25 };
        el.setAttribute('style', `animation-delay: ${defaults.delay}s; animation-fill-mode: both;`);
        startObserver('item');
    },
    inserted: (el, binding) => {
        if (observerMap.has('item')) {
            observerMap.get('item').observe(el);
        } else {
            el.classList.add('fade-in');
        }
    },
});
