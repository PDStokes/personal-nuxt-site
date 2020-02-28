<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/tidal/jayzicon/jayzicon-bg.jpg')"
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
                    <h1 class="margin-top-8">Example images:</h1>
                    <project-image
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/tidal/jayzicon/jayzicon-slider-1-banner.jpg"
                        image-alt="JAY-Z GRAMMY Year Slider Component"
                        large-image-src="images/tidal/jayzicon/jayzicon-slider-1.jpg"
                    />
                    <project-image
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/tidal/jayzicon/jayzicon-slider-2-banner.jpg"
                        image-alt="JAY-Z GRAMMY Year Slider Component opened to content"
                        large-image-src="images/tidal/jayzicon/jayzicon-slider-2.jpg"
                    />
                    <project-image
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/tidal/jayzicon/jayzicon-playlists-banner.jpg"
                        image-alt="Playlist Embed Selector Component"
                        large-image-src="images/tidal/jayzicon/jayzicon-playlists.jpg"
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
main /deep/ .main-image-bg {
    background-position: left;
    @include bp(tablet-only) {
        background-position: 40%;
    }
}
</style>
