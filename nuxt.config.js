
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
        script: [
            { src: 'https://kit.fontawesome.com/b57b99e256.js', crossorigin: 'anonymous' },
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
        '~/plugins/lazyLoaders.js',
        '~/plugins/lightBox.js',
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
    serverMiddleware: [
        'redirect-ssl',
    ],
    /*
  ** Build configuration
  */
    build: {
        transpile: [
            'three/examples/jsm/postprocessing',
            'three/examples/jsm/shaders',
            'three/examples/jsm/controls/OrbitControls',
        ],
        file: {
            test: /\.(mov|mp4)$/,
            options: {
                name: '[name].[ext]',
            },
        },
    },
};
