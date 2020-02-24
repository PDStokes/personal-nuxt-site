import Vue from 'vue';
import lightBox from '~/components/light-box.vue';

const mainFunc = (options) => {
    const LightBoxComponent = Vue.extend(lightBox);
    let lbCompInstance = null;

    const createLightbox = () => {
        lbCompInstance = new LightBoxComponent().$mount();
        document.querySelector('.site-wrapper').appendChild(lbCompInstance.$el);
    };

    const setImage = (imageOptions) => {
        document.scrollingElement.style.overflow = 'hidden';
        if (lbCompInstance !== null) {
            lbCompInstance.$data.imageSrc = imageOptions.imageSrc;
            lbCompInstance.$data.imageAlt = imageOptions.imageAlt;
            lbCompInstance.$data.visible = true;
        }
    };

    const hideLightBox = () => {
        document.scrollingElement.style.overflow = 'scroll';
        if (lbCompInstance !== null) {
            lbCompInstance.$data.visible = false;
        }
    };

    // Destroy and remove lightbox on leave
    Vue.mixin({
        beforeRouteLeave (to, from, next) {
            if (lbCompInstance !== null) {
                lbCompInstance.$destroy();
                lbCompInstance.$el.parentNode.removeChild(lbCompInstance.$el);
                lbCompInstance = null;
            }
            next();
        },
    });

    return {
        setImage,
        createLightbox,
        hideLightBox,
    };
};

Vue.prototype.$lightBox = mainFunc();
