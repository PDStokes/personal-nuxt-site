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
                    <h1>Look some CONTENT</h1>
                </div>
            </template>
        </project-page>
    </main>
</template>

<script>
import projectPage from '~/components/project-page.vue';

export default {
    components: {
        projectPage,
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
    @include bp(tablet-only) {
        background-position: 80%;
    }
}
</style>
