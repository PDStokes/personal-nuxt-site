<template>
    <main class="content-wrapper">
        <transition appear appear-active-class="slide-in">
            <h1 ref="slideOut" class="page-title">Delaware Investments</h1>
        </transition>
        <transition appear appear-active-class="fade-in">
            <section ref="fadeOut" class="page-content">
                <p class="font-large quote">Delaware Investments was a US-based asset management firm, rebranded in 2017 as Macquarie Investment Management.</p>
                <div class="tool-box--role">
                    <img
                        v-for="logo in logoList"
                        :key="logo"
                        class="tool"
                        :src="logo"
                    >
                </div>
                <div class="role-box">
                    <h2 class="role">Junior Web Developer</h2>
                    <p class="bold">Duties:</p>
                    <ul>
                        <li>Implemented data visualizations to enhance online reports and literature.</li>
                        <li>Developed unique code for web pages while collaborating with multiple teams.</li>
                        <li>Utilized various JS libraries to build user experiences.</li>
                        <li>Enhanced functionality and efficiency of interactive web content.</li>
                        <li>Adhered to strict legal guidelines and compliance while developing.</li>
                    </ul>
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
                require('~/assets/images/logos/logo-sitecore.png'),
                require('~/assets/images/logos/logo-jquery.png'),
                require('~/assets/images/logos/logo-highcharts.png'),
                require('~/assets/images/logos/logo-less.png'),
                require('~/assets/images/logos/logo-qgis.png'),
            ];
        },
        projectList () {
            return [
                {
                    title: 'Regional Director Locator',
                    href: 'rdmap',
                    bgImg: require('~/assets/images/delaware/zipcode.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-sitecore.png'),
                        require('~/assets/images/logos/logo-jquery.png'),
                        require('~/assets/images/logos/logo-highcharts.png'),
                        require('~/assets/images/logos/logo-less.png'),
                        require('~/assets/images/logos/logo-qgis.png'),
                    ],
                },
                {
                    title: 'Interactive Charts',
                    href: 'charts',
                    bgImg: require('~/assets/images/delaware/zipcode.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-sitecore.png'),
                        require('~/assets/images/logos/logo-highcharts.png'),
                        require('~/assets/images/logos/logo-less.png'),
                    ],
                },
                {
                    title: 'Site Maintenance',
                    href: 'sitecore',
                    bgImg: require('~/assets/images/delaware/zipcode.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-sitecore.png'),
                        require('~/assets/images/logos/logo-jquery.png'),
                        require('~/assets/images/logos/logo-less.png'),
                    ],
                },
            ];
        },
    },
    head () {
        return {
            title: 'Delaware Investments',
        };
    },
};
</script>
