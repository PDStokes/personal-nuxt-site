<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/personal/recipeel-bg.jpg')"
            project-title="ReciPeel"
            project-subtitle="Prototype Nuxt app that collects pertinent information from inputted recipe website."
            :text-shadow="true"
            :dark-text="true"
            :logo-list="logoList"
            role-copy="Supreme Leader"
            description-copy="The goal of this prototype is to create an app which scrapes recipe data from a website, negating the obnoxious amount of extraneous information and ads that users must usually scroll through, and displays this recipe information in a succinct manner.  For more info, check Github page below, or try out the prototype yourself."
        >
            <template v-slot:project-content>
                <div class="margin-top-4">
                    <project-link
                        href="https://github.com/PDStokes/recipe-proto"
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/personal/github-banner.jpg"
                        image-alt="Github page for ReciPeel app"
                    />
                    <project-link
                        href="https://recipe-proto.herokuapp.com/"
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/personal/recipeel-banner.jpg"
                        image-alt="Github page for ReciPeel app"
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
                require('~/assets/images/logos/logo-vue.png'),
                require('~/assets/images/logos/logo-nuxt.png'),
                require('~/assets/images/logos/logo-node.png'),
                require('~/assets/images/logos/logo-sass.png'),
                require('~/assets/images/logos/logo-heroku.png'),
            ],
        };
    },
    head () {
        return {
            title: 'ReciPeel',
        };
    },
    meta: {
        pageName: 'ReciPeel',
    },
};
</script>

<style lang="scss" scoped>
main /deep/ .main-image-bg {
    @include bp(phone) {
        background-position: left;
    }
    @include bp(tablet-only) {
        background-position: 35%;
    }
}
</style>
