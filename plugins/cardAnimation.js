import Vue from 'vue';

const classAdd = (elems, className) => {
    if (elems.length) {
        elems.forEach((elem) => {
            elem.classList.add(className);
        });
    } else {
        elems.classList.add(className);
    }
};

const leaveAnim = {
    scrollToTop: true,
    beforeRouteLeave (to, from, next) {
        const slideOut = typeof this.$refs.slideOut !== 'undefined' ? this.$refs.slideOut : null;
        const fadeOut = typeof this.$refs.fadeOut !== 'undefined' ? this.$refs.fadeOut : null;
        const delayFadeOut = typeof this.$refs.delayedComponent !== 'undefined' ? this.$refs.delayedComponent.$refs.delayFadeOut || this.$refs.delayFadeOut : null;
        let timeout = 750;

        if (delayFadeOut) {
            timeout = (delayFadeOut.length * 0.5) / 2 * 1000;

            delayFadeOut.forEach((elem) => {
                elem.$el.classList.add('fade-out');
            });
        }

        if (slideOut) {
            classAdd(slideOut, 'slide-out');
        }

        if (fadeOut) {
            classAdd(fadeOut, 'fade-out');
        }

        if (this.$refs.projectComponent) {
            const breadCrumb = this.$refs.projectComponent.$refs.breadCrumb.$refs.crumbBar !== 'undefined' ? this.$refs.projectComponent.$refs.breadCrumb.$refs.crumbBar : null;
            breadCrumb.classList.remove('slide-in');
            breadCrumb.classList.add('slide-out');
        }

        setTimeout(() => {
            next();
        }, timeout);
    },
};

Vue.mixin(leaveAnim);
