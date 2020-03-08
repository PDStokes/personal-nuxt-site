<template>
    <main>
        <project-page
            ref="projectComponent"
            :background-image="require('assets/images/personal/website-bg.jpg')"
            project-title="This Website"
            project-subtitle="Widely considered my seminal work, and a contemporary masterpiece."
            :text-shadow="true"
            :logo-list="logoList"
            role-copy="Just me"
            description-copy="The inspiration for this website came from an old NASA brand guide I found while surfing the net.  I decided to put my experience with three.js (and a little WebGL) to use and create a cool landing page, along with a Nuxt site that fell inline with the feel of the brand guide.  The site/app is hosted on Heroku."
        >
            <template v-slot:project-content>
                <div class="margin-top-4">
                    <project-link
                        href="https://github.com/PDStokes/personal-nuxt-site"
                        :image-width="1920"
                        :image-height="350"
                        image-src="images/personal/github-banner.jpg"
                        image-alt="Github page for personal website"
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
                require('~/assets/images/logos/logo-threejs.png'),
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
            title: 'My Website',
        };
    },
    meta: {
        pageName: 'My Website',
    },
};
</script>
