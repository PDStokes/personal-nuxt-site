<template>
    <div>
        <div class="main-image-bg" :style="mainBgStyle">
            <transition appear appear-active-class="slide-in">
                <div ref="slideOut" class="title-wrapper">
                    <h1 class="project-title noselect" v-html="filteredTitle" />
                    <p class="project-subtitle noselect">{{ projectSubtitle }}</p>
                </div>
            </transition>
        </div>
        <div class="content-wrapper project">
            <breadcrumbs ref="breadCrumb" />
            <transition appear appear-active-class="fade-in">
                <section ref="fadeOut" class="page-content project">
                    <div class="project-box">
                        <div class="split-2">
                            <h2 class="role">Role: {{ roleCopy }}</h2>
                            <div v-if="descriptionCopy">
                                <p class="bold">Description:</p>
                                <p>{{ descriptionCopy }}</p>
                            </div>
                            <div v-if="featureList">
                                <p class="bold">Features:</p>
                                <ul>
                                    <li v-for="feature in featureList" :key="feature">{{ feature }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="split-2">
                            <div class="tool-box">
                                <img
                                    v-for="logo in logoList"
                                    :key="logo"
                                    class="tool"
                                    :src="logo"
                                >
                            </div>
                        </div>
                    </div>
                    <slot name="project-content" />
                </section>
            </transition>
        </div>
    </div>
</template>

<script>
import breadcrumbs from '~/components/breadcrumbs.vue';

export default {
    components: {
        breadcrumbs,
    },
    props: {
        projectTitle: {
            type: String,
            required: true,
        },
        projectSubtitle: {
            type: String,
            required: true,
        },
        logoList: {
            type: Array,
            required: true,
        },
        roleCopy: {
            type: String,
            required: true,
        },
        descriptionCopy: {
            type: String,
            default: null,
        },
        featureList: {
            type: Array,
            default: null,
        },
        textShadow: {
            type: Boolean,
            default: false,
        },
        backgroundImage: {
            type: String,
            required: true,
        },
    },
    computed: {
        filteredTitle () {
            return this.projectTitle.replace(/(\s)/g, '<br>');
        },
        mainBgStyle () {
            if (this.textShadow) {
                return { backgroundImage: `linear-gradient(to left, rgba(0,0,0,0) 30%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.75) 100%), url(${this.backgroundImage})` };
            }

            return { backgroundImage: `url(${this.backgroundImage})` };
        }
    },
};
</script>

<style lang="scss" scoped>
.main-image-bg {
    background: center center / cover no-repeat black;
    min-height: 95vh;
    margin-top: 40px;
}

.title-wrapper {
    max-width: $max-content-width;
    margin: auto;
    padding: 20vh 20px;
}

.project-title {
    font-family: $sans-nasa-font;
    font-weight: bold;
    color: white;
    font-size: 5rem;
    line-height: 5.5rem;
    margin-top: 0;
    @include bp(phone) {
        font-size: 4rem;
        line-height: 4.5rem;
    }
}

.project-subtitle {
    color: white;
    font-size: 2.5rem;
    line-height: 3rem;
    margin-top: 0;

    @include bp(not-phone) {
        max-width: 40%;
    }
}
</style>
