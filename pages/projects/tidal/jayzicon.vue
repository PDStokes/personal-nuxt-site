<template>
    <main class="content-wrapper">
        <transition appear appear-active-class="slide-in">
            <h1 ref="pageTitle">Jayz ICON</h1>
        </transition>

        <transition appear appear-active-class="fade-in">
            <section ref="pageContent" style="animation-delay: 0.25s">
                <p class="font-large quote">Landing page celebrating receipt of GRAMMY Salute to Industry Icons Award for JAY-Z.</p>
                <div class="project-box">
                    <div class="split-2">
                        <h2 class="role">Role: Lead</h2>
                        <p class="bold">Features:</p>
                        <ul>
                            <li>Interactive awards timeline with expandable click for more info</li>
                            <li>Playlist selector / loader</li>
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
    name: 'JAYZICON',
    mixins: [leaveAnim],
    head () {
        return {
            title: 'JAYZ ICON',
        };
    },
    meta: {
        pageName: 'JAYZ ICON',
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
