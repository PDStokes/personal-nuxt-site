<template>
    <main class="content-wrapper">
        <transition appear appear-active-class="slide-in">
            <h1 ref="pageTitle" class="page-title">Dynamic Embed Matrix</h1>
        </transition>

        <transition appear appear-active-class="fade-in">
            <section ref="pageContent" class="page-content">
                <p class="font-large quote">Experimental use of API to display video playlists in thumbnail matrix format.</p>
                <div class="project-box">
                    <div class="split-2">
                        <h2 class="role">Role: Lead</h2>
                        <p class="bold">Features:</p>
                        <ul>
                            <li>Dynamically load array of video IDs and thumbnail images from API</li>
                            <li>Exclude videos unavailable in country/region</li>
                            <li>Video swap and reload on select</li>
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
import { leaveAnim } from '~/plugins/cardAnimation.js';

export default {
    mixins: [leaveAnim],
    head () {
        return {
            title: 'Embed Matrix',
        };
    },
    meta: {
        pageName: 'Embed Matrix',
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
