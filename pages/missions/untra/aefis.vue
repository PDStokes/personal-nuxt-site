<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/untra/aefis-bg.jpg')"
            project-title="AEFIS"
            project-subtitle="AEFIS is a web-based assessment management platform that facilitates the collection and application of real-time assessment data."
            :text-shadow="true"
            :logo-list="logoList"
            role-copy="Mixed"
            description-copy="AEFIS was a sister company of Untra, so I would often design graphics/brochures and develop web pages for them as if they were a client.  The work I am displaying is from 6-8 years ago, so the style is a bit dated, but it was developed in wordpress and I utilized php, so I feel the experience is still relevant."
        >
            <template v-slot:project-content>
                <div class="margin-top-4">
                    <h1 class="margin-bottom-2">Examples of pages maintained/updated:</h1>
                    <project-image
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/untra/aefis-home-banner.jpg"
                        image-alt="AEFIS home page"
                        large-image-src="images/untra/aefis-home.jpg"
                    />
                    <project-image
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/untra/aefis-blog-banner.jpg"
                        image-alt="Custom blog page"
                        large-image-src="images/untra/aefis-blog.jpg"
                    />
                    <h1 class="margin-bottom-2 margin-top-6">Examples of graphics (pdf):</h1>
                    <project-link
                        href="/aefis-mats.pdf"
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/untra/aefis-mats-banner.jpg"
                        image-alt="Example of brochures/graphics"
                        :download="true"
                    />
                </div>
            </template>
        </project-page>
    </main>
</template>

<script>
import projectPage from '~/components/project-page.vue';
import projectImage from '~/components/project-image.vue';
import projectLink from '~/components/project-link.vue';

export default {
    components: {
        projectPage,
        projectImage,
        projectLink,
    },
    data () {
        return {
            logoList: [
                require('~/assets/images/logos/logo-wordpress.png'),
                require('~/assets/images/logos/logo-adobe.png'),
            ],
        };
    },
    head () {
        return {
            title: 'AEFIS',
        };
    },
    meta: {
        pageName: 'AEFIS',
    },
};
</script>
