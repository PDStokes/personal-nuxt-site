<template>
    <div class="breadcrumb-wrapper">
        <div class="breadcrumb-bar">
            <nuxt-link
                v-for="(crumb, index) in breadCrumbs"
                :key="crumb.link"
                :to="crumb.link"
                class="crumby font-small noselect"
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
            const metaTags = this.$nuxt.$options.context.route.meta;
            let crumbs = [];
            if (matchedRoutes.length > 2) {
                crumbs = this.generateCrumbs(matchedRoutes, metaTags);
            }
            return crumbs;
        },
    },
    methods: {
        generateCrumbs (routes, meta) {
            const pathArr = routes.map((elem, index) => {
                const path = elem.path;
                const name = meta[index].pageName || path.slice(path.lastIndexOf('/') + 1);
                if (path.slice(-1) === '/') {
                    return null;
                }
                return {
                    link: path,
                    name,
                };
            });
            const finalArr = pathArr.filter(item => item !== null);
            return finalArr;
        },
    },
};
</script>

<style lang="scss" scoped>
$base-color: rgb(151, 151, 151);

.breadcrumb-wrapper {
    width: 100%;
    position: fixed;
    top: 65px;
}

.breadcrumb-bar {
    max-width: 1150px;
    padding: 0 20px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @include bp(not-phone) {
        justify-content: flex-start;
    }
}

@for $i from 0 through 2 {
    .level-#{$i} {
        background-color: lighten($base-color, $i * 8%);
        &:after {
            background-color: lighten($base-color, $i * 8%);
        }
    }
}

.crumby {
    position: relative;
    color: white;
    padding: 5px 10px;
    border: 1px solid darken($base-color, 5%);
    border-right: none;

    + .crumby {
        padding: 5px 12px;
    }

    &:after {
        content: '';
        height: 10px;
        width: 10px;
        transform: translateY(-50%) rotate(45deg);
        border-right: 1px solid darken($base-color, 5%);
        border-top: 1px solid darken($base-color, 5%);
        position: absolute;
        right: -6px;
        top: 50%;
        z-index: 5;
    }

    &:last-child {
        border: 1px solid darken($base-color, 5%);
        &:after {
            display: none;
        }
    }
}
</style>
