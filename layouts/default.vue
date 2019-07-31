<template>
    <div class="site-wrapper">
        <header-component />
        <breadcrumbs :key="breadKey" />
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
    data () {
        return {
            breadKey: 0,
        };
    },
    beforeUpdate () {
        this.breadKey++;
    },
};
</script>
