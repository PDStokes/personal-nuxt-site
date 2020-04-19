<template>
    <main class="content-wrapper">
        <transition appear appear-active-class="slide-in">
            <h1 ref="slideOut" class="page-title">TIDAL</h1>
        </transition>
        <transition appear appear-active-class="fade-in">
            <section ref="fadeOut" class="page-content">
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
                    <h2 class="role">Web Developer</h2>
                    <p class="bold">Duties:</p>
                    <ul>
                        <li>Built reusable components to improve site robustness and enrich user experience.</li>
                        <li>Developed web solutions for confidential releases, high profile clients, and multi-faceted campaigns, maintaining quality often with short turnaround.</li>
                        <li>Set up and provided technical coverage for livestream events.</li>
                        <li>Transitioned seamlessly between frameworks during a complete website/stack revamp.</li>
                        <li>Provided cross team support for web-related needs.</li>
                        <li>Maintained strong education in latest technologies and software for use in various projects.</li>
                    </ul>
                    <p class="disclosure">*All worked illustrated here is exclusive property of TIDAL.</p>
                </div>
            </section>
        </transition>
        <div class="project-list">
            <projectCards ref="delayedComponent" :projects="projectList" />
        </div>
    </main>
</template>

<script>
import projectCards from '~/components/project-cards.vue';

export default {
    components: {
        projectCards,
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
                    title: 'Originals',
                    href: 'originals',
                    bgImg: require('~/assets/images/tidal/originals/originals.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-graphql.png'),
                        require('~/assets/images/logos/logo-vue.png'),
                        require('~/assets/images/logos/logo-nuxt.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
                {
                    title: 'Supported Devices',
                    href: 'devices',
                    bgImg: require('~/assets/images/tidal/devices/devices.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-vue.png'),
                        require('~/assets/images/logos/logo-nuxt.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
                {
                    title: 'TIDAL Redesign',
                    href: 'tidalredesign',
                    bgImg: require('~/assets/images/tidal/redesign/redesign.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-vue.png'),
                        require('~/assets/images/logos/logo-nuxt.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
                {
                    title: 'JAY-Z ICON',
                    href: 'jayzicon',
                    bgImg: require('~/assets/images/tidal/jayzicon/jayzicon.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-angular.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
                {
                    title: 'Dynamic Embed Matrix',
                    href: 'embedmatrix',
                    bgImg: require('~/assets/images/tidal/embedmatrix/embedmatrix.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-angular.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
                {
                    title: 'Map Based Projects',
                    href: 'maps',
                    bgImg: require('~/assets/images/tidal/latinx/latinx.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-raphael.png'),
                        require('~/assets/images/logos/logo-angular.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
                {
                    title: 'Made In America 2018',
                    href: 'mia2018',
                    bgImg: require('~/assets/images/tidal/mia/mia.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-angular.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
                {
                    title: 'Extras',
                    href: 'extras',
                    bgImg: require('~/assets/images/tidal/extras/extras.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-angular.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
            ];
        },
    },
    head () {
        return {
            title: 'TIDAL',
        };
    },
};
</script>
