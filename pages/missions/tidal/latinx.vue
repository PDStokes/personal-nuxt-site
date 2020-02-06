<template>
    <main class="content-wrapper">
        <transition appear appear-active-class="slide-in">
            <h1 ref="slideOut" class="page-title">Latinx '17</h1>
        </transition>

        <transition appear appear-active-class="fade-in">
            <section ref="fadeOut" class="page-content">
                <p class="font-large quote">Landing page celebrating Latinx Heritage Month in 2017.</p>
                <div class="project-box">
                    <div class="split-2">
                        <h2 class="role">Role: Lead</h2>
                        <p class="bold">Features:</p>
                        <ul>
                            <li>Interactive SVG map for country-based playlist selection</li>
                            <li>Custom design</li>
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
            title: 'Latinx \'17',
        };
    },
    meta: {
        pageName: 'Latinx \'17',
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
