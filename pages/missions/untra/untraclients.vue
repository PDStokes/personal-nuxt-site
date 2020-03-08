<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/untra/untra-bg.jpg')"
            project-title="Untra Clients"
            project-subtitle="Untra corporation's web clients mostly consisted of small to medium-sized local businesses."
            :text-shadow="true"
            :logo-list="logoList"
            role-copy="Mixed"
            description-copy="A majority of the websites and pages I had worked on for Untra are either gone or redesigned, but I put together a few examples of the type of sites/businesses we would work with. Quite a few sites utilized Adobe Flash, mostly for animations/interactivity, but obviously, as of today, Flash is considered a defunct/undesirable web technology."
        >
            <template v-slot:project-content>
                <div class="margin-top-4">
                    <h1 class="margin-bottom-2">Examples of pages maintained/updated:</h1>
                    <project-image
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/untra/untra-client-1-banner.jpg"
                        image-alt="Nuts To You home page"
                        large-image-src="images/untra/untra-client-1.jpg"
                    />
                    <project-image
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/untra/untra-client-2-banner.jpg"
                        image-alt="Microsociety home page"
                        large-image-src="images/untra/untra-client-2.jpg"
                    />
                    <project-image
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/untra/untra-client-3-banner.jpg"
                        image-alt="Untra home page"
                        large-image-src="images/untra/untra-client-3.jpg"
                    />
                </div>
            </template>
        </project-page>
    </main>
</template>

<script>
import projectPage from '~/components/project-page.vue';
import projectImage from '~/components/project-image.vue';

export default {
    components: {
        projectPage,
        projectImage,
    },
    data () {
        return {
            logoList: [
                require('~/assets/images/logos/logo-wordpress.png'),
                require('~/assets/images/logos/logo-adobe.png'),
                require('~/assets/images/logos/logo-flash.png'),
            ],
        };
    },
    head () {
        return {
            title: 'Untra Clients',
        };
    },
    meta: {
        pageName: 'Untra Clients',
    },
};
</script>
