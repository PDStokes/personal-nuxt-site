const leaveAnim = {
    beforeRouteLeave (to, from, next) {
        const pageTitle = typeof this.$refs.pageTitle !== 'undefined' ? this.$refs.pageTitle : null;
        const pageContent = typeof this.$refs.pageContent !== 'undefined' ? this.$refs.pageContent : null;
        const cardChildren = typeof this.$refs.cardComponent !== 'undefined' ? this.$refs.cardComponent.$children[0].$children : null;
        let timeout = 750;

        if (cardChildren) {
            timeout = (cardChildren.length * 0.5) / 2 * 1000;

            cardChildren.forEach((elem) => {
                elem.$el.className += ' fade-out';
            });

            pageTitle.style.animationDelay = (timeout - 500) / 1000 + 's';
        }

        if (pageTitle) {
            pageTitle.className += 'slide-out';
        }
        if (pageContent) {
            pageContent.className += 'fade-out';
        }

        setTimeout(() => {
            next();
        }, timeout);
    },
};

export { leaveAnim };
