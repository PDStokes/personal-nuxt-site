<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/tidal/embedmatrix/embedmatrix-bg.jpg')"
            project-title="Dynamic Embed Matrix"
            project-subtitle="Experimental use of API to display video playlists in thumbnail matrix format."
            :text-shadow="true"
            :logo-list="logoList"
            role-copy="Lead"
            :feature-list="featureList"
        >
            <template v-slot:project-content>
                <div>
                    <h1 class="margin-top-4">Demo:</h1>
                    <video-player
                        video-src="images/tidal/embedmatrix/embedmatrix-demo.mp4"
                        poster-src="images/tidal/embedmatrix/embedmatrix-poster.jpg"
                    />
                    <h2 class="margin-top-2 margin-bottom-1">Explanation:</h2>
                    <p class="font-medium">This was an experiment more than a project, where I built upon the Embed selector and Embed matrix components that I had worked on before.  In this instance, I wanted to utilize our Web API, which was mostly intended for social pages and sharing, and use it to dynamically create video matrixes from a playlist ID (at the time we did not have video playlist support on web).  The development of the component was fairly straight forward, requesting data from a playlist ID and performing various sorting and filtering to organize thumbnails, titles, and video IDs.  The biggest problem I encountered was dealing with videos on a playlist that were not available in a user’s country.  I circumvented that by performing another API request of the video ID itself, and if it returned data I pushed the item to the array, and if it returned an error I knew the ID was not available.  A framework transition (Angular to Nuxt) and playlist support added to the embed player ultimately ended this project’s inclusion, but it was still a valuable experience.</p>
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
                'Dynamically load array of video IDs and thumbnail images from API',
                'Exclude videos unavailable in country/region',
                'Video ID swap and content reload on select',
            ],
        };
    },
    head () {
        return {
            title: 'Embed Matrix',
        };
    },
    meta: {
        pageName: 'Embed Matrix',
    },
};
</script>

<style lang="scss" scoped>

</style>
