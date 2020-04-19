<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/tidal/devices/devices-page-bg.jpg')"
            project-title="Supported Devices"
            project-subtitle="Support site detailing all TIDAL enabled devices and relevant use information."
            :text-shadow="true"
            :logo-list="logoList"
            role-copy="Lead"
            :feature-list="featureList"
        >
            <template v-slot:project-content>
                <div>
                    <h2 class="margin-top-4 margin-bottom-1">Live site:</h2>
                    <project-link
                        href="https://bit.ly/3cuxnEJ"
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/tidal/devices/devices-page.jpg"
                        image-alt="Supported Devices Page"
                    />
                    <h2 class="margin-top-2 margin-bottom-1">Explanation:</h2>
                    <p class="font-medium">This was a project I lead the development of that was to replace our previous outdated Supported Devices page. The general requirements for the project were to have a product card layout, category based nav, search/sorting functionality, footer ad banners, and dynamic route params that allowed for category and product link sharing.  I set up the first implementation of the page with all these features, and then handed off to QA and my other teammates, who then after some deliberation with the Design team, added the category based header artwork and some minor aesthetic changes.</p>
                    <h1 class="margin-top-6">Example images:</h1>
                    <project-image
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/tidal/devices/devices-page-pc-banner.jpg"
                        image-alt="Desktop & Laptop Category"
                        large-image-src="images/tidal/devices/devices-page-pc.jpg"
                    />
                    <project-image
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/tidal/devices/devices-page-search-banner.jpg"
                        image-alt="Search not found functionality"
                        large-image-src="images/tidal/devices/devices-page-search.jpg"
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
                require('~/assets/images/logos/logo-vue.png'),
                require('~/assets/images/logos/logo-nuxt.png'),
                require('~/assets/images/logos/logo-node.png'),
                require('~/assets/images/logos/logo-sass.png'),
            ],
            featureList: [
                'SPA with dynamic route params, allowing link sharing for specific categories and products',
                'Search and content sorting functionality',
                'Custom product card layouts',
                'Dynamic footer ad banners and header artwork',
            ],
        };
    },
    head () {
        return {
            title: 'Supported Devices',
        };
    },
    meta: {
        pageName: 'Supported Devices',
    },
};
</script>
