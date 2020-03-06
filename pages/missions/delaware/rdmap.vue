<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/delaware/zipcode-bg.jpg')"
            project-title="Regional Director Locator"
            project-subtitle="A set of components allowing investors and clients to find their regional director."
            :text-shadow="true"
            :logo-list="logoList"
            role-copy="Lead"
            :feature-list="featureList"
        >
            <template v-slot:project-content>
                <div class="margin-top-4">
                    <h1 class="margin-bottom-2">Demo:</h1>
                    <video-player
                        video-src="images/delaware/zipcode-demo.mp4"
                        poster-src="images/delaware/zipcode-poster.jpg"
                    />
                    <h1 class="margin-bottom-2 margin-top-4">Explanation:</h1>
                    <project-image
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/delaware/zipcode-map-banner.jpg"
                        image-alt="Regional Director Map and Locator"
                        large-image-src="images/delaware/zipcode-map.jpg"
                    />
                    <p class="font-medium margin-top-2">This was a very long and involved project where I was tasked with creating an interactive map and finder, which would allow a user to input their zip code, or navigate a map, to determine who their regional director was.</p>
                    <p class="font-medium">The first major hurdle was how to create map shape files based on zip codes.  It turns out that a zip code is not in fact an easily distinguishable shape or map piece, much like a town/city boundary, but is the route in which mail is delivered.  On top of that, there are around 90,000 zip codes in the US.</p>
                    <p class="font-medium">After much research, I luckily found a zip code map file on a government website, but it was in a format used for geographic information systems (GIS).  I then went about teaching myself a GIS program, in this case it was the open-source QGIS, which would allow me to edit the map shape along with importing our data sheet of zip codes and regional directors.  It took a lot of editing, and the inclusion of a few QGIS plugins, but I was eventually able to assemble a set of files which included map shapes of each director, and a data sheet of their zip codes.</p>
                    <p class="font-medium">I then took these files, converted them into JSON, and plugged them into the Highmaps JS library to build an interactive map.  In addition to the map, I developed code that searched through the zip code data sheets to locate the regional directors and then fed the relevant contact information, which depending on the director also included an introductory video.  This component could be used with the map or as a stand alone locator.  The map was deployed to its own landing page, and the locator was used throughout the site on various pages.</p>
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
                require('~/assets/images/logos/logo-sitecore.png'),
                require('~/assets/images/logos/logo-jquery.png'),
                require('~/assets/images/logos/logo-highcharts.png'),
                require('~/assets/images/logos/logo-less.png'),
                require('~/assets/images/logos/logo-qgis.png'),
            ],
            featureList: [
                'Interactive maps divided by zip codes',
                'Locator form component that returned regional director',
                'Map and Locator functionality bounded to return equivalent information',
            ],
        };
    },
    head () {
        return {
            title: 'Regional Director Locator',
        };
    },
    meta: {
        pageName: 'Regional Director Locator',
    },
};
</script>

<style lang="scss" scoped>
main /deep/ .main-image-bg {
    @include bp(phone) {
        background-position: 40%;
    }
    @include bp(tablet-only) {
        background-position: 80%;
    }
}
</style>
