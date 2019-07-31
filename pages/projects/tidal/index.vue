<template>
    <main class="content-wrapper">
        <transition appear appear-active-class="slide-in">
            <h1 ref="pageTitle">TIDAL</h1>
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
    meta: {
        pageName: 'TIDAL',
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
                    title: 'Jayz ICON',
                    href: 'jayzicon',
                    bgImg: require('~/assets/images/spammy.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-angular.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
                {
                    title: 'Latinx Heritage Month \'17',
                    href: 'latinx',
                    bgImg: require('~/assets/images/spammy.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-raphael.png'),
                        require('~/assets/images/logos/logo-angular.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
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
