<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/tidal/redesign/redesign-bg.jpg')"
            project-title="TIDAL Redesign"
            project-subtitle="Complete redesign and framework transition."
            :logo-list="logoList"
            role-copy="Mixed"
            description-copy="During the complete overhaul of TIDAL's website, I aided in creating pages and breaking out reusable components; utilizing our new stylguide, which streamlined both design and code to be uniform throughout."
        >
            <template v-slot:project-content>
                <div>
                    <h1 class="margin-top-4">Examples of pages worked on:</h1>
                    <project-link
                        href="https://tidal.com/partners/samsung"
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/tidal/redesign/partner-page.jpg"
                        image-alt="TIDAL Partner Page"
                    />
                    <project-link
                        href="https://tidal.com/nfl"
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/tidal/redesign/nfl-page.jpg"
                        image-alt="NFL Partner Page"
                    />
                    <project-link
                        href="https://tidal.com/thebeatles"
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/tidal/redesign/beatles-page.jpg"
                        image-alt="The Beatles Anniversary Page"
                    />
                    <div class="margin-top-8 margin-bottom-8">
                        <h1 class="margin-bottom-0">Tickets Page Component:</h1>
                        <p class="margin-bottom-2 font-medium">This was a tickets page component I built, to be used for the member only pre-sales we would often run, but also for regular ticket on-sales.  It included a search feature that would filter based on venue name and location.</p>
                        <project-image
                            :image-width="1920"
                            :image-height="350"
                            image-src="images/tidal/redesign/tickets-page.jpg"
                            image-alt="TIDAL Tickets Page"
                            large-image-src="images/tidal/redesign/tickets-page-large.jpg"
                        />
                    </div>
                    <h1 class="margin-bottom-0">Index Banner Component:</h1>
                    <p class="margin-bottom-2 font-medium">This was a banner component I built for our index page that could be customized with various text, images, and icons.  It was used to highlight high-profile events/programs that we wanted to drive traffic toward.</p>
                    <project-image
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/tidal/redesign/index-banner.jpg"
                        image-alt="TIDAL Index Page with custom Banner component"
                        large-image-src="images/tidal/redesign/index-banner-large.jpg"
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
