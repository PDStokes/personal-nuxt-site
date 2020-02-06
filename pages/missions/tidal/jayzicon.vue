<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/tidal/redesign/redesign-bg.jpg')"
            project-title="JAY-Z ICON"
            project-subtitle="Landing page celebrating receipt of GRAMMY Salute to Industry Icons Award for JAY-Z."
            :logo-list="logoList"
            role-copy="Lead"
            :feature-list="featureList"
        >
            <template v-slot:project-content>
                <div>
                    <h1>Look some CONTENT</h1>
                </div>
            </template>
        </project-page>
    </main>
</template>

<script>
import { projectLeaveAnim } from '~/plugins/pageAnimation.js';
import projectPage from '~/components/project-page.vue';

export default {
    components: {
        projectPage,
    },
    mixins: [projectLeaveAnim],
    head () {
        return {
            title: 'JAY-Z ICON',
        };
    },
    meta: {
        pageName: 'JAY-Z ICON',
    },
    data () {
        return {
            logoList: [
                require('~/assets/images/logos/logo-angular.png'),
                require('~/assets/images/logos/logo-node.png'),
                require('~/assets/images/logos/logo-sass.png'),
            ],
            featureList: [
                'Interactive awards timeline with expandable click for more info',
                'Playlist selector / loader',
                'Custom design and animation',
            ],
        };
    },
};
</script>

<style lang="scss" scoped>

</style>
