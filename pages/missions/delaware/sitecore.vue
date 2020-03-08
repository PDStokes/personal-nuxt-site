<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/delaware/sitecore-bg.jpg')"
            project-title="Site Maintenance"
            project-subtitle="Landing Page and Investment Fund updates managed through Sitecore."
            :text-shadow="true"
            :logo-list="logoList"
            role-copy="Mixed"
            description-copy="During my time at Delaware there were many tasks that revolved around maintaining and updating various sites and pages through the Sitecore CMS.  Tasks included: updating the data in the investment funds, adding new funds/products, updating legal and compliance statements, updating banners and ads with new programs or animations, etc…"
        >
            <template v-slot:project-content>
                <div class="margin-top-4">
                    <h1 class="margin-bottom-0 margin-top-4">Examples of pages maintained/updated:</h1>
                    <p class="margin-bottom-2 margin-top-0">*These are examples of the pages I had worked on, but they do not currently reflect any of that work.</p>
                    <project-link
                        href="https://www.delawarefunds.com/financial-advisors"
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/delaware/sitecore-1-banner.jpg"
                        image-alt="Example home page"
                    />
                    <project-link
                        href="https://www.delawarefunds.com/individual-investors/products/mutual-funds/fixed-income-funds/delaware-floating-rate-II-fund"
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/delaware/sitecore-2-banner.jpg"
                        image-alt="Example fund page"
                    />
                    <project-link
                        href="https://www.delawarefunds.com/financial-advisors/literature/insights"
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/delaware/sitecore-3-banner.jpg"
                        image-alt="Example literature articles"
                    />
                </div>
            </template>
        </project-page>
    </main>
</template>

<script>
import projectPage from '~/components/project-page.vue';
import projectLink from '~/components/project-link.vue';

export default {
    components: {
        projectPage,
        projectLink,
    },
    data () {
        return {
            logoList: [
                require('~/assets/images/logos/logo-sitecore.png'),
                require('~/assets/images/logos/logo-jquery.png'),
                require('~/assets/images/logos/logo-less.png'),
            ],
        };
    },
    head () {
        return {
            title: 'Site Maintenance',
        };
    },
    meta: {
        pageName: 'Site Maintenance',
    },
};
</script>
