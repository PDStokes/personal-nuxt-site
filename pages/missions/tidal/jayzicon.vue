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
                    <h1 class="margin-top-4">Demo:</h1>
                    <video-player
                        video-src="images/tidal/jayzicon/jayz-icon-demo.mp4"
                        poster-src="images/tidal/jayzicon/jayz-icon-poster.jpg"
                    />
                </div>
            </template>
        </project-page>
    </main>
</template>

<script>
import projectPage from '~/components/project-page.vue';
import videoPlayer from '~/components/video-player.vue';

export default {
    components: {
        projectPage,
        videoPlayer,
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
    head () {
        return {
            title: 'JAY-Z ICON',
        };
    },
    meta: {
        pageName: 'JAY-Z ICON',
    },
};
</script>

<style lang="scss" scoped>

</style>
