<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/delaware/charts-bg.jpg')"
            project-title="Interactive Charts"
            project-subtitle="Data vizualizations created for literature, campaigns, and products."
            :text-shadow="true"
            :logo-list="logoList"
            role-copy="Lead"
            description-copy="Creating data vizualizations was an almost daily task for me at Delaware.  Often the charts would go in literature or montlhy wrap-up, but occasionally there would be larger projects based on new campaigns or products."
        >
            <template v-slot:project-content>
                <div class="margin-top-4">
                    <h1 class="margin-bottom-2 margin-top-4">Examples:</h1>
                    <project-link
                        href="https://www.delawarefunds.com/individual-investors/literature/chart-of-the-month/dim-economic-forecasts-are-telling-of-a-lack-of-faith"
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/delaware/example-banner.jpg"
                        image-alt="Example literature page"
                    />
                    <project-image
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/delaware/charts-banner.jpg"
                        image-alt="Four interactive charts made with Highcharts"
                        large-image-src="images/delaware/charts-large.jpg"
                    />
                    <p class="font-medium margin-top-3">During my time at Delaware I created many data vizualizations for literature and campaigns.  Most of those pages are now unreachable, or the products no longer offered, but I have assembled a few image examples and a link to an older literature page.  The process for most of these tasks would be to recieve the data and copy from the writers, assemble the article and build the vizualizations, and then go through compliance and legal to make sure everything was kosher.  In nearly all the vizualizations I would utilize a JS library called Highcharts, which made charting easy but allowed for a good amount of customization.</p>
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
                require('~/assets/images/logos/logo-sitecore.png'),
                require('~/assets/images/logos/logo-jquery.png'),
                require('~/assets/images/logos/logo-highcharts.png'),
                require('~/assets/images/logos/logo-less.png'),
            ],
        };
    },
    head () {
        return {
            title: 'Interactive Charts',
        };
    },
    meta: {
        pageName: 'Interactive Charts',
    },
};
</script>

<style lang="scss" scoped>
main /deep/ .main-image-bg {
    @include bp(phone) {
        background-position: right;
    }
}
</style>
