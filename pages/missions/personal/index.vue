<template>
    <main class="content-wrapper">
        <transition appear appear-active-class="slide-in">
            <h1 ref="slideOut" class="page-title">Personal Work</h1>
        </transition>
        <transition appear appear-active-class="fade-in">
            <section ref="fadeOut" class="page-content">
                <p class="font-large quote">Assorted projects and work I've done for personal enjoyment.</p>
                <div class="tool-box--role">
                    <img
                        v-for="logo in logoList"
                        :key="logo"
                        class="tool"
                        :src="logo"
                    >
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
                require('~/assets/images/logos/logo-threejs.png'),
                require('~/assets/images/logos/logo-vue.png'),
                require('~/assets/images/logos/logo-nuxt.png'),
                require('~/assets/images/logos/logo-node.png'),
                require('~/assets/images/logos/logo-sass.png'),
            ];
        },
        projectList () {
            return [
                {
                    title: 'This Site!',
                    href: 'website',
                    bgImg: require('~/assets/images/personal/website.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-threejs.png'),
                        require('~/assets/images/logos/logo-vue.png'),
                        require('~/assets/images/logos/logo-nuxt.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                        require('~/assets/images/logos/logo-heroku.png'),
                    ],
                },
                {
                    title: 'Prototype: ReciPeel',
                    href: 'recipeel',
                    bgImg: require('~/assets/images/personal/recipeel.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-vue.png'),
                        require('~/assets/images/logos/logo-nuxt.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
                {
                    title: '3D Work',
                    href: 'cgi',
                    bgImg: require('~/assets/images/personal/cgi.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-maya.png'),
                        require('~/assets/images/logos/logo-adobe.png'),
                    ],
                },
            ];
        },
    },
    head () {
        return {
            title: 'Personal Work',
        };
    },
};
</script>
