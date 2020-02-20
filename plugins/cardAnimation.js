import Vue from 'vue';

const classAdd = (elems, className) => {
    if (elems.length > 1) {
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
        const animObjs = [
            [ typeof this.$refs.slideOut !== 'undefined' ? this.$refs.slideOut : null, 'slide-out' ],
            [ typeof this.$refs.fadeOut !== 'undefined' ? this.$refs.fadeOut : null, 'fade-out' ],
            [ typeof this.$refs.projectComponent !== 'undefined' ? this.$refs.projectComponent.$refs.slideOut : null, 'slide-out' ],
            [ typeof this.$refs.projectComponent !== 'undefined' ? this.$refs.projectComponent.$refs.fadeOut : null, 'fade-out' ],
        ];

        const delayFadeOut = typeof this.$refs.delayedComponent !== 'undefined' ? this.$refs.delayedComponent.$refs.delayFadeOut || this.$refs.delayFadeOut : null;
        let timeout = 750;

        if (delayFadeOut) {
            timeout = (delayFadeOut.length * 0.5) / 2 * 1000;

            delayFadeOut.forEach((elem) => {
                elem.$el.classList.add('fade-out');
            });
        }

        animObjs.forEach((animType) => {
            if (animType[0]) {
                classAdd(animType[0], animType[1]);
            }
        });

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
