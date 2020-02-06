<template>
    <main class="content-wrapper">
        <transition appear appear-active-class="slide-in">
            <h1 ref="slideOut" class="page-title">Chasing The Cup</h1>
        </transition>

        <transition appear appear-active-class="fade-in">
            <section ref="fadeOut" class="page-content">
                <p class="font-large quote">Interactive map and playlist landing page for FIFA World Cup campaign.</p>
                <div class="project-box">
                    <div class="split-2">
                        <h2 class="role">Role: Support</h2>
                        <p class="bold">Features:</p>
                        <ul>
                            <li>World map with continent-based hover</li>
                            <li>Country-based playlist selection and loading</li>
                            <li>Custom design and animation</li>
                        </ul>
                    </div>
                    <div class="split-2">
                        <div class="tool-box">
                            <img
                                v-for="logo in logoList"
                                :key="logo"
                                class="tool"
                                :src="logo"
                            >
                        </div>
                    </div>
                </div>
            </section>
        </transition>
    </main>
</template>

<script>

export default {
    head () {
        return {
            title: 'Chasing The Cup',
        };
    },
    meta: {
        pageName: 'Chasing The Cup',
    },
    data () {
        return {
            logoList: [
                require('~/assets/images/logos/logo-raphael.png'),
                require('~/assets/images/logos/logo-angular.png'),
                require('~/assets/images/logos/logo-node.png'),
                require('~/assets/images/logos/logo-sass.png'),
            ],
        };
    },
};
</script>

<style lang="scss" scoped>

</style>
