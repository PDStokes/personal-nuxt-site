<template>
    <div class="site-wrapper">
        <header-component />
        <nuxt />
    </div>
</template>

<script>
import headerComponent from '~/components/header.vue';

export default {
    components: {
        headerComponent,
    },
};
</script>
