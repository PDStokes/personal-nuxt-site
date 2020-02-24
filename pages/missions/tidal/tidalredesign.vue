<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/tidal/redesign/redesign-bg.jpg')"
            project-title="TIDAL Redesign"
            project-subtitle="Complete redesign and framework transition."
            :logo-list="logoList"
            role-copy="Support"
            description-copy="During the complete overhaul of TIDAL's website, I aided in creating pages and breaking out reusable components; utilizing our new stylguide, which streamlined both design and code to be uniform throughout."
        >
            <template v-slot:project-content>
                <div>
                    <h1 class="margin-top-4">Examples of pages worked on:</h1>
                    <project-link
                        href="https://tidal.com/partners/samsung"
                        :image-width="1920"
                        :image-height="540"
                        image-src="images/tidal/redesign/partner-page.jpg"
                        image-alt="TIDAL Partner Page"
                    />
                    <project-image
                        :image-width="1920"
                        :image-height="540"
                        image-src="images/tidal/redesign/tickets-page.jpg"
                        image-alt="TIDAL Tickets Page"
                        large-image-src="images/tidal/redesign/tickets-page-large.jpg"
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
        };
    },
    head () {
        return {
            title: 'TIDAL Redesign',
        };
    },
    meta: {
        pageName: 'TIDAL Redesign',
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
