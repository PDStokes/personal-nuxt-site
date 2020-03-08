<template>
    <main class="content-wrapper">
        <transition appear appear-active-class="slide-in">
            <h1 ref="slideOut" class="page-title">Untra Corporation</h1>
        </transition>
        <transition appear appear-active-class="fade-in">
            <section ref="fadeOut" class="page-content">
                <p class="font-large quote">A Managed Technology Services provider focused on small to medium-sized businesses.</p>
                <div class="tool-box--role">
                    <img
                        v-for="logo in logoList"
                        :key="logo"
                        class="tool"
                        :src="logo"
                    >
                </div>
                <div class="role-box">
                    <h2 class="role">Web / Graphic Designer</h2>
                    <p class="bold">Duties:</p>
                    <ul>
                        <li>Created graphic/branding assets and print materials for clients.</li>
                        <li>Designed layouts and developed websites for clients and internal purposes.</li>
                        <li>Maintained client and internal web presence with Wordpress.</li>
                    </ul>
                    <p class="disclosure">*All worked illustrated here is exclusive property of Untra Corporation.</p>
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
                require('~/assets/images/logos/logo-wordpress.png'),
                require('~/assets/images/logos/logo-adobe.png'),
                require('~/assets/images/logos/logo-flash.png'),
            ];
        },
        projectList () {
            return [
                {
                    title: 'AEFIS',
                    href: 'aefis',
                    bgImg: require('~/assets/images/untra/aefis.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-wordpress.png'),
                        require('~/assets/images/logos/logo-adobe.png'),
                    ],
                },
                {
                    title: 'Untra Clients',
                    href: 'untraclients',
                    bgImg: require('~/assets/images/untra/untra.jpg'),
                    logoList: [
                        require('~/assets/images/logos/logo-wordpress.png'),
                        require('~/assets/images/logos/logo-adobe.png'),
                        require('~/assets/images/logos/logo-flash.png'),
                    ],
                },
            ];
        },
    },
    head () {
        return {
            title: 'Untra Corporation',
        };
    },
};
</script>
