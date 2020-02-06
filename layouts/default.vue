<template>
    <div class="site-wrapper">
        <header-component v-if="!home" />
        <nuxt />
    </div>
</template>

<script>
import headerComponent from '~/components/header.vue';

export default {
    components: {
        headerComponent,
    },
    computed: {
        home () {
            return this.$route.path === '/';
        },
    },
};
</script>
