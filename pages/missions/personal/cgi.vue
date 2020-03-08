<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/personal/cgi-bg.jpg')"
            project-title="3D Work"
            project-subtitle="Two 3D projects I did that felt worth showing off."
            :text-shadow="true"
            :logo-list="logoList"
            role-copy="Digital Wizard"
            description-copy="The first project (Minotaur) was purely for fun.  I had never attempted an in-depth character sculpt and wanted to test my abilities at the time.  The second project was actual contract work I did for an employer, whom I had done an internship with in the past.  They wanted a couple renders/turntables of a car to use for a project they were working on.  They supplied the car asset and I did all the animation/shading/rendering."
        >
            <template v-slot:project-content>
                <div class="margin-top-4">
                    <h1>Minotaur:</h1>
                    <video-player
                        video-src="images/personal/minotaur-demo.mp4"
                        poster-src="images/personal/minotaur-poster.jpg"
                    />
                    <h1 class="margin-top-4">Car renders:</h1>
                    <video-player
                        video-src="images/personal/car-demo.mp4"
                        poster-src="images/personal/car-poster.jpg"
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
                require('~/assets/images/logos/logo-maya.png'),
                require('~/assets/images/logos/logo-adobe.png'),
            ],
        };
    },
    head () {
        return {
            title: '3D Work',
        };
    },
    meta: {
        pageName: '3D Work',
    },
};
</script>
