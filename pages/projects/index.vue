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
import { leaveAnim } from '~/plugins/cardAnimation.js';

export default {
    components: {
        projectCards,
    },
    mixins: [leaveAnim],
    computed: {
        projectList () {
            return [
                {
                    title: 'TIDAL',
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
                    title: 'Delaware Investments',
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
                        require('~/assets/images/logos/logo-vue.png'),
                        require('~/assets/images/logos/logo-nuxt.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
            ];
        },
    },
};
</script>
