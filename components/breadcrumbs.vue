<template>
    <div class="breadcrumb-wrapper">
        <div class="breadcrumb-bar">
            <nuxt-link
                v-for="(crumb, index) in breadCrumbs"
                :key="crumb.link"
                :to="crumb.link"
                :class="`level-${index}`"
            >{{ crumb.name }}</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        breadCrumbs () {
            const matchedRoutes = this.$route.matched;
            let crumbs = [];
            if (matchedRoutes.length > 1) {
                crumbs = this.generateCrumbs(matchedRoutes);
            }
            return crumbs;
        },
    },
    methods: {
        generateCrumbs (routes) {
            const pathArr = routes.map((elem) => {
                console.info(elem);
                const path = elem.path;
                const name = path.slice(path.lastIndexOf('/') + 1);
                return {
                    link: path,
                    name,
                };
            });
            return pathArr;
        },
    },
};
</script>

<style lang="scss" scoped>
$base-color: rgb(151, 151, 151);

.breadcrumb-wrapper {
    max-width: 1150px;
    padding: 0 20px;
    position: fixed;
    top: 50px;
}

.breadcrumb-bar {
    max-width: 1200px;
    width: fit-content;
    margin: 0 auto;
    margin-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @include bp(not-phone) {
        justify-content: flex-start;
    }
}

@for $i from 0 through 2 {
    .level-#{$i} {
        color: white;
        padding: 3px;
        background-color: lighten($base-color, $i * 5%);
    }
}
</style>
