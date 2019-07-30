<template>
    <main class="content-wrapper">
        <transition appear appear-active-class="slide-in">
            <h1 ref="pageTitle">Projects</h1>
        </transition>
        <div class="project-list">
            <projectCards ref="cardComponent" :projects="projectList" />
        </div>
    </main>
</template>

<script>
import projectCards from '~/components/project-cards.vue';

export default {
    components: {
        projectCards,
    },
    beforeRouteLeave (to, from, next) {
        const timeout = (this.$refs.cardComponent.$children[0].$children.length * 0.5) / 2 * 1000;

        this.$refs.cardComponent.$children[0].$children.forEach((elem) => {
            elem.$el.className += ' fade-out';
        });

        this.$refs.pageTitle.style.animationDelay = (timeout - 500) / 1000 + 's';
        this.$refs.pageTitle.className += 'slide-out';

        setTimeout(() => {
            next();
        }, timeout);
    },
    computed: {
        projectList () {
            return [
                {
                    title: 'Tidal',
                    href: 'tidal',
                    bgImg: require('~/assets/images/spammy.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-angular.png'),
                        require('~/assets/images/logos/logo-vue.png'),
                        require('~/assets/images/logos/logo-nuxt.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                        require('~/assets/images/logos/logo-git.png'),
                    ],
                },
                {
                    title: 'Delaware',
                    href: 'delaware',
                    bgImg: require('~/assets/images/spammy.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-sitecore.png'),
                        require('~/assets/images/logos/logo-highcharts.png'),
                        require('~/assets/images/logos/logo-less.png'),
                        require('~/assets/images/logos/logo-qgis.png'),
                    ],
                },
                {
                    title: 'Untra',
                    href: 'untra',
                    bgImg: require('~/assets/images/spammy.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-wordpress.png'),
                        require('~/assets/images/logos/logo-adobe.png'),
                    ],
                },
                {
                    title: 'Personal Fun',
                    href: 'personal',
                    bgImg: require('~/assets/images/spammy.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-threejs.png'),
                    ],
                },
            ];
        },
    },
};
</script>
