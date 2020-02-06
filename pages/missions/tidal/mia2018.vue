<template>
    <main class="content-wrapper">
        <transition appear appear-active-class="slide-in">
            <h1 ref="slideOut" class="page-title">Made In America 2018</h1>
        </transition>

        <transition appear appear-active-class="fade-in">
            <section ref="fadeOut" class="page-content">
                <p class="font-large quote">Livestream platform for Made In America Festival 2018.</p>
                <div class="project-box">
                    <div class="split-2">
                        <h2 class="role">Role: Support</h2>
                        <p class="bold">Features:</p>
                        <ul>
                            <li>Livestream page with dynamically updated lineup / stages</li>
                            <li>Filterable program and VOD page</li>
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
            title: 'MIA 2018',
        };
    },
    meta: {
        pageName: 'MIA 2018',
    },
    data () {
        return {
            logoList: [
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
