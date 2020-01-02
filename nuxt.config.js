
export default {
    mode: 'universal',
    /*
  ** Headers of the page
  */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=DM+Serif+Display' },
        ],
    },
    /*
  ** Customize the progress-bar color
  */
    loading: { color: '#fff' },
    /*
  ** Global CSS
  */
    css: [
        '~/assets/scss/app.scss',
    ],
    /*
  ** Plugins to load before mounting the App
  */
    plugins: [
        '~/plugins/cardAnimation.js',
        // { src: '~/plugins/threePlugin.js', mode: 'client' },
    ],
    /*
  ** Nuxt.js modules
  */
    modules: [
        '@nuxtjs/style-resources',
    ],
    styleResources: {
        scss: '~/assets/scss/base/*.scss',
    },
    /*
  ** Build configuration
  */
    build: {
        transpile: ['three/examples/jsm/postprocessing'],
    },
};
