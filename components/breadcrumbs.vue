<template>
    <div class="breadcrumb-wrapper">
        <div
            ref="crumbBar"
            class="breadcrumb-bar"
            :class="{ 'slide-in' : enter }"
        >
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
    data () {
        return {
            enter: false,
        };
    },
    computed: {
        breadCrumbs () {
            const matchedRoutes = this.$route.matched;
            const metaTags = this.$nuxt.$options.context.route.meta;
            let crumbs = [];
            if (matchedRoutes.length > 1) {
                crumbs = this.generateCrumbs(matchedRoutes, metaTags);
            } else {
                crumbs = 0;
            }
            this.enterCheck(crumbs);
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
        enterCheck (truthy) {
            if (truthy && this.enter !== true) {
                this.enter = true;
            } else if (!truthy) {
                this.enter = false;
            }
        },
    },
};
</script>

<style lang="scss" scoped>

.breadcrumb-wrapper {
    width: 100%;
    position: absolute;
    top: 65px;
    overflow: hidden;
}

.breadcrumb-bar {
    max-width: 1150px;
    padding: 0 20px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

@for $i from 0 through 2 {
    .level-#{$i} {
        background-color: lighten($site-base-color, $i * 15%);
        &:after {
            background-color: lighten($site-base-color, $i * 15%);
        }
    }
}

.crumby {
    position: relative;
    color: white;
    padding: 5px 10px;
    border: 1px solid darken($site-base-color, 5%);
    border-right: none;

    &:nth-child(1) {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    + .crumby {
        padding: 5px 12px;
    }

    &:after {
        content: '';
        height: 10px;
        width: 10px;
        transform: translateY(-50%) rotate(45deg);
        border-right: 1px solid darken($site-base-color, 5%);
        border-top: 1px solid darken($site-base-color, 5%);
        position: absolute;
        right: -6px;
        top: 50%;
        z-index: 5;
    }

    &:last-child {
        border: 1px solid darken($site-base-color, 5%);
        &:after {
            display: none;
        }
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    &:hover {
        text-shadow: 0px 0px 3px rgba(0,0,0,0.25);
    }
}
</style>
