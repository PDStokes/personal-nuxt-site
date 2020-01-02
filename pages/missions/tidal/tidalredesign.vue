<template>
    <main class="content-wrapper">
        <transition appear appear-active-class="slide-in">
            <h1 ref="pageTitle" class="page-title">TIDAL Redesign</h1>
        </transition>

        <transition appear appear-active-class="fade-in">
            <section ref="pageContent" class="page-content">
                <p class="font-large quote">Complete redesign and framework transition.</p>
                <div class="project-box">
                    <div class="split-2">
                        <h2 class="role">Role: Support</h2>
                        <p class="bold">Description:</p>
                        <p>During the complete overhaul of TIDAL's website, I aided in creating pages and breaking out reusable components; utilizing our new stylguide, which streamlined both design and code to be uniform throughout.</p>
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
import { leaveAnim } from '~/plugins/cardAnimation.js';

export default {
    mixins: [leaveAnim],
    head () {
        return {
            title: 'TIDAL Redesign',
        };
    },
    meta: {
        pageName: 'TIDAL Redesign',
    },
    data () {
        return {
            logoList: [
                require('~/assets/images/logos/logo-vue.png'),
                require('~/assets/images/logos/logo-nuxt.png'),
                require('~/assets/images/logos/logo-node.png'),
                require('~/assets/images/logos/logo-sass.png'),
            ],
        };
    },
};
</script>

<style lang="scss" scoped>

</style>
