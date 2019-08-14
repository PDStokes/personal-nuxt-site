<template>
    <div class="site-wrapper">
        <header-component v-if="!home" />
        <breadcrumbs />
        <nuxt />
    </div>
</template>

<script>
import headerComponent from '~/components/header.vue';
import breadcrumbs from '~/components/breadcrumbs.vue';

export default {
    components: {
        headerComponent,
        breadcrumbs,
    },
    computed: {
        home () {
            return this.$route.path === '/';
        },
    },
};
</script>
