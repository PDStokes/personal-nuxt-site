const projectLeaveAnim = {
    scrollToTop: true,
    beforeRouteLeave (to, from, next) {
        if (typeof this.$refs.projectComponent !== 'undefined') {
            const pageTitle = typeof this.$refs.projectComponent.$refs.pageTitle !== 'undefined' ? this.$refs.projectComponent.$refs.pageTitle : null;
            const pageSubTitle = typeof this.$refs.projectComponent.$refs.pageSubTitle !== 'undefined' ? this.$refs.projectComponent.$refs.pageSubTitle : null;
            const pageContent = this.$refs.projectComponent.$refs.pageContent !== 'undefined' ? this.$refs.projectComponent.$refs.pageContent : null;
            const breadCrumb = this.$refs.projectComponent.$refs.breadCrumb.$refs.crumbBar !== 'undefined' ? this.$refs.projectComponent.$refs.breadCrumb.$refs.crumbBar : null;

            if (pageTitle) {
                pageTitle.classList.add('slide-out');
            }

            if (pageSubTitle) {
                pageSubTitle.classList.add('slide-out');
            }

            if (pageContent) {
                pageContent.classList.add('fade-out');
            }

            if (breadCrumb) {
                console.log(breadCrumb);
                breadCrumb.classList.remove('slide-in');
                breadCrumb.classList.add('slide-out');
            }
        }

        setTimeout(() => {
            next();
        }, 750);
    },
};

export { projectLeaveAnim };
