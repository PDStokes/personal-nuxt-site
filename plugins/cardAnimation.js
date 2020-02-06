const leaveAnim = {
    scrollToTop: true,
    beforeRouteLeave (to, from, next) {
        const pageTitle = typeof this.$refs.pageTitle !== 'undefined' ? this.$refs.pageTitle : null;
        const pageSubTitle = typeof this.$refs.pageSubTitle !== 'undefined' ? this.$refs.pageSubTitle : null;
        const pageContent = typeof this.$refs.pageContent !== 'undefined' ? this.$refs.pageContent : null;
        const cardChildren = typeof this.$refs.cardComponent !== 'undefined' ? this.$refs.cardComponent.$children[0].$children : null;
        const projectChildren = typeof this.$refs.projectRow !== 'undefined' ? this.$refs.projectRow.$children : null;
        let timeout = 750;

        if (cardChildren) {
            timeout = (cardChildren.length * 0.5) / 2 * 1000;

            cardChildren.forEach((elem) => {
                elem.$el.classList.add('fade-out');
            });
        }

        if (projectChildren) {
            timeout = (projectChildren.length * 0.5) / 2 * 1000;

            projectChildren.forEach((elem) => {
                elem.$el.classList.add('fade-out');
            });
        }

        if (pageTitle) {
            pageTitle.classList.add('slide-out');
        }

        if (pageSubTitle) {
            pageSubTitle.classList.add('slide-out');
        }

        if (pageContent) {
            pageContent.classList.add('fade-out');
        }

        setTimeout(() => {
            next();
        }, timeout);
    },
};

export { leaveAnim };
