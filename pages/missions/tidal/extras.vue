<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/tidal/extras/extras-bg.jpg')"
            project-title="Extras"
            project-subtitle="An assortment of other projects I developed."
            :text-shadow="true"
            :logo-list="logoList"
            role-copy="Lead"
            description-copy="A few assorted projects I wanted to highlight that didn't warrant their own page or indepth explanations."
        >
            <template v-slot:project-content>
                <div>
                    <h1 class="margin-top-4">Songwriters Hall of Fame Demo:</h1>
                    <video-player
                        video-src="images/tidal/extras/shof-demo.mp4"
                        poster-src="images/tidal/extras/shof-poster.jpg"
                    />
                    <h2 class="margin-top-2 margin-bottom-1">Explanation:</h2>
                    <p class="font-medium">This was a landing page built for JAY-Z’s induction into the Songwriters Hall of Fame.  We received short quotes and videos from other artists and celebrities to highlight, along with a short essay and other related content.  It was a fairly straight forward page to develop, but had a lot of press on it and was built in a very short turnaround.</p>
                    <h1 class="margin-top-8">DJ Selector Demo:</h1>
                    <video-player
                        video-src="images/tidal/extras/djselector-demo.mp4"
                        poster-src="images/tidal/extras/djselector-poster.jpg"
                    />
                    <h2 class="margin-top-2 margin-bottom-1">Explanation:</h2>
                    <p class="font-medium">This was a project page I built that would become a weekly program for a year or so. Our content team would reach out to popular DJs and have them send us a set playlist.  The project consisted of a program homepage that housed each DJ and the most recent weekly playlists, and then each DJ had a seperate personal page with all their playlists made for us and an artist bio.</p>
                    <h1 class="margin-top-8">Wench Demo:</h1>
                    <video-player
                        video-src="images/tidal/extras/wench-demo.mp4"
                        poster-src="images/tidal/extras/wench-poster.jpg"
                    />
                    <h2 class="margin-top-2 margin-bottom-1">Explanation:</h2>
                    <p class="font-medium">This was a small scale project where we wanted to highlight videos and still images for a particular campaign.  The design team wanted to do something other than just display the images statically, so I suggested a hover interaction that scrolled the images based on mouse position inside a window, to give it a shaky/creepy feel inline with the content.  This was all done with vanilla JS.</p>
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
        };
    },
    head () {
        return {
            title: 'Extras',
        };
    },
    meta: {
        pageName: 'Extras',
    },
};
</script>

<style lang="scss" scoped>
main /deep/ .main-image-bg {
    background-position: left;
}
</style>
