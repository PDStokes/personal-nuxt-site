<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/tidal/originals/originals-page-bg.jpg')"
            project-title="TIDAL Originals"
            project-subtitle="Landing page showcasing all the original content TIDAL produces."
            :text-shadow="true"
            :logo-list="logoList"
            role-copy="Lead"
            :feature-list="featureList"
        >
            <template v-slot:project-content>
                <div>
                    <h2 class="margin-top-4 margin-bottom-1">Live site:</h2>
                    <project-link
                        href="https://bit.ly/2KjMAMN"
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/tidal/originals/originals-page.jpg"
                        image-alt="TIDAL Originals"
                    />
                    <h2 class="margin-top-2 margin-bottom-1">Explanation:</h2>
                    <p class="font-medium">This was a landing page I built in a short turnaround to showcase our original series', their latest episodes, and the hosts who run them.  It required brand new functionality which we hadn’t built into our components, and a custom API call using GraphQL, which I had no experience with.  A project of firsts for myself, I added a click/expand function that worked with our carousel component, a dynamic background style feature, and the GraphQL API call for our latest episodes based on a category created by our editorial team.</p>
                    <h1 class="margin-top-6">Example images:</h1>
                    <project-image
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/tidal/originals/originals-page-series-banner.jpg"
                        image-alt="Series Carousel"
                        large-image-src="images/tidal/originals/originals-page-series.jpg"
                    />
                    <project-image
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/tidal/originals/originals-page-hosts-banner.jpg"
                        image-alt="GraphQL Latest Episodes and Hosts Carousel"
                        large-image-src="images/tidal/originals/originals-page-hosts.jpg"
                    />
                </div>
            </template>
        </project-page>
    </main>
</template>

<script>
import projectPage from '~/components/project-page.vue';
import projectLink from '~/components/project-link.vue';
import projectImage from '~/components/project-image.vue';

export default {
    components: {
        projectPage,
        projectLink,
        projectImage,
    },
    data () {
        return {
            logoList: [
                require('~/assets/images/logos/logo-graphql.png'),
                require('~/assets/images/logos/logo-vue.png'),
                require('~/assets/images/logos/logo-nuxt.png'),
                require('~/assets/images/logos/logo-node.png'),
                require('~/assets/images/logos/logo-sass.png'),
            ],
            featureList: [
                'Interactive Series and Hosts carousels',
                'GraphQL API call to dynamically load Latest Episodes content',
            ],
        };
    },
    head () {
        return {
            title: 'TIDAL Originals',
        };
    },
    meta: {
        pageName: 'TIDAL Originals',
    },
};
</script>
