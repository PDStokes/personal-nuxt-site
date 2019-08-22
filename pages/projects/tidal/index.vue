<template>
    <main class="content-wrapper">
        <transition appear appear-active-class="slide-in">
            <h1 ref="pageTitle" class="page-title">TIDAL</h1>
        </transition>
        <transition appear appear-active-class="fade-in">
            <section ref="pageContent" class="page-content">
                <p class="font-large quote">Tidal is a subscription-based music streaming service that combines lossless audio and high-definition music videos with exclusive content and special features on music.</p>
                <div class="tool-box--role">
                    <img
                        v-for="logo in logoList"
                        :key="logo"
                        class="tool"
                        :src="logo"
                    >
                </div>
                <div class="role-box">
                    <h2 class="role">Front End Web Developer</h2>
                    <p class="bold">Duties:</p>
                    <ul>
                        <li>Develop custom components, features, and functionality to improve user experience </li>
                        <li>Build sites for high-priority artists and campaigns, while maintaining confidentiality </li>
                        <li>Update main sites with daily promo-releases, tickets campaigns, giveaways, livestreams/concerts, and other marketing material </li>
                        <li>Provide insight and web-related guidance for marketing projects </li>
                        <li>Support livestreams and other live media to ensure site integrity</li>
                    </ul>
                </div>
            </section>
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
    head () {
        return {
            title: 'TIDAL',
        };
    },
    computed: {
        logoList () {
            return [
                require('~/assets/images/logos/logo-angular.png'),
                require('~/assets/images/logos/logo-vue.png'),
                require('~/assets/images/logos/logo-nuxt.png'),
                require('~/assets/images/logos/logo-node.png'),
                require('~/assets/images/logos/logo-sass.png'),
                require('~/assets/images/logos/logo-git.png'),
            ];
        },
        projectList () {
            return [
                {
                    title: 'JAY-Z ICON',
                    href: 'jayzicon',
                    bgImg: require('~/assets/images/space-bg.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-angular.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
                {
                    title: 'Latinx Heritage Month \'17',
                    href: 'latinx',
                    bgImg: require('~/assets/images/space-bg.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-raphael.png'),
                        require('~/assets/images/logos/logo-angular.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
                {
                    title: 'Dynamix Embed Matrix',
                    href: 'embedmatrix',
                    bgImg: require('~/assets/images/space-bg.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-angular.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
                {
                    title: 'Made In America 2018',
                    href: 'mia2018',
                    bgImg: require('~/assets/images/space-bg.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-angular.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
                {
                    title: 'Chasing The Cup',
                    href: 'chasingthecup',
                    bgImg: require('~/assets/images/space-bg.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-raphael.png'),
                        require('~/assets/images/logos/logo-angular.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
                {
                    title: 'Wench',
                    href: 'wench',
                    bgImg: require('~/assets/images/space-bg.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-angular.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
                {
                    title: 'Songwriter\'s Hall of Fame',
                    href: 'shof',
                    bgImg: require('~/assets/images/space-bg.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-angular.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
            ];
        },
    },
};
</script>
