<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/tidal/latinx/latinx-bg.jpg')"
            project-title="Latinx"
            project-subtitle="Landing page celebrating Latinx Heritage Month."
            :text-shadow="true"
            :logo-list="logoList"
            role-copy="Lead"
            :feature-list="featureList"
        >
            <template v-slot:project-content>
                <div>
                    <h1 class="margin-top-4">Demo:</h1>
                    <video-player
                        video-src="images/tidal/latinx/latinx-demo.mp4"
                        poster-src="images/tidal/latinx/latinx-poster.jpg"
                    />
                    <h2 class="margin-top-2 margin-bottom-1">Explanation:</h2>
                    <p class="font-medium">This was a custom landing page I built for Latinx Heritage Month.  Project managers wanted something visually interesting and engaging that would also highlight the content they were creating for the in-app campaign.  We landed on a concept that, along with a stylized essay in the header, would include an interactive map of the Latin countries we were including in the campaign.  The map would let the users select a specific country and it would automatically scroll to the designated playlist of that country.</p>
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
                require('~/assets/images/logos/logo-raphael.png'),
                require('~/assets/images/logos/logo-angular.png'),
                require('~/assets/images/logos/logo-node.png'),
                require('~/assets/images/logos/logo-sass.png'),
            ],
            featureList: [
                'Interactive SVG map for country-based playlist selection',
                'Custom design',
            ],
        };
    },
    head () {
        return {
            title: 'Latinx',
        };
    },
    meta: {
        pageName: 'Latinx',
    },
};
</script>

<style lang="scss" scoped>
main /deep/ .main-image-bg {
    background-position: left;
}
</style>
