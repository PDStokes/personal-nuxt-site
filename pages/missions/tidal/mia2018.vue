<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/tidal/mia/mia-bg.jpg')"
            project-title="Made In America 2018"
            project-subtitle="Livestream platform for Made In America Festival 2018."
            :logo-list="logoList"
            role-copy="Support"
            :feature-list="featureList"
        >
            <template v-slot:project-content>
                <div>
                    <h1 class="margin-top-4">Demo:</h1>
                    <video-player
                        video-src="images/tidal/mia/mia-demo.mp4"
                        poster-src="images/tidal/mia/mia-poster.jpg"
                    />
                    <h2 class="margin-top-2 margin-bottom-1">Explanation:</h2>
                    <p class="font-medium">TIDAL’s livestream of the Made In America festival is considered a yearly highlight for the company.  In consideration of the importance of the event, we decided to roll out a more comprehensive web campaign.  The final result was a livestream page with dynamically updating lineups and stages, a program page for full lineup and artist content, and a page for VODs (replays). </p>
                    <h1 class="margin-top-6">More examples:</h1>
                    <project-image
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/tidal/mia/mia-livestream.jpg"
                        image-alt="Made In America Livestream Section"
                        large-image-src="images/tidal/mia/mia-livestream-large.jpg"
                    />
                    <project-image
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/tidal/mia/mia-program.jpg"
                        image-alt="Made In America Program Page"
                        large-image-src="images/tidal/mia/mia-program-large.jpg"
                    />
                </div>
            </template>
        </project-page>
    </main>
</template>

<script>
import projectPage from '~/components/project-page.vue';
import videoPlayer from '~/components/video-player.vue';
import projectImage from '~/components/project-image.vue';

export default {
    components: {
        projectPage,
        videoPlayer,
        projectImage,
    },
    data () {
        return {
            logoList: [
                require('~/assets/images/logos/logo-angular.png'),
                require('~/assets/images/logos/logo-node.png'),
                require('~/assets/images/logos/logo-sass.png'),
            ],
            featureList: [
                'Livestream page with dynamically updated lineup / stages',
                'Filterable program and VOD page',
                'Custom design',
            ],
        };
    },
    head () {
        return {
            title: 'MIA 2018',
        };
    },
    meta: {
        pageName: 'MIA 2018',
    },
};
</script>

<style lang="scss" scoped>
main /deep/ .main-image-bg {
    background-position: right;
}
</style>
