<template>
    <main class="content-wrapper">
        <transition appear appear-active-class="slide-in">
            <h1 ref="pageTitle" class="page-title">Mission Log</h1>
        </transition>
        <div class="project-list noselect">
            <transition-group ref="projectRow" appear appear-active-class="fade-in" class="project-row" tag="div">
                <nuxt-link
                    v-for="(project, index) in projectList"
                    :key="project.title"
                    class="project-wrapper"
                    :class="`icon-${project.icon}`"
                    :style="{animationDelay: 0.15 * index + `s`}"
                    :to="project.href"
                    append
                >
                    <div class="project-info">
                        <h1 class="title">{{ project.title }}</h1>
                    </div>
                    <div class="icon-wrapper">
                        <img class="icon light" :src="project.iconSrc" alt="">
                        <img class="icon mid" :src="project.iconSrc" alt="">
                        <img class="icon dark" :src="project.iconSrc" alt="">
                    </div>
                    <div class="tool-box--project">
                        <img
                            v-for="logo in project.logoList"
                            :key="logo"
                            class="tool"
                            :src="logo"
                        >
                    </div>
                </nuxt-link>
            </transition-group>
            <!-- <projectCards ref="cardComponent" :projects="projectList" /> -->
        </div>
    </main>
</template>

<script>
import { leaveAnim } from '~/plugins/cardAnimation.js';

export default {
    mixins: [leaveAnim],
    computed: {
        projectList () {
            return [
                {
                    title: 'TIDAL',
                    href: 'tidal',
                    icon: 'tidal',
                    iconSrc: require('~/assets/images/project-icons/tidal-logo.png'),
                    logoList: [
                        require('~/assets/images/logos/logo-angular.png'),
                        require('~/assets/images/logos/logo-vue.png'),
                        require('~/assets/images/logos/logo-nuxt.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                        require('~/assets/images/logos/logo-git.png'),
                    ],
                },
                {
                    title: 'Delaware Investments',
                    href: 'delaware',
                    icon: 'delaware',
                    iconSrc: require('~/assets/images/project-icons/delaware-logo.png'),
                    logoList: [
                        require('~/assets/images/logos/logo-sitecore.png'),
                        require('~/assets/images/logos/logo-highcharts.png'),
                        require('~/assets/images/logos/logo-less.png'),
                        require('~/assets/images/logos/logo-qgis.png'),
                    ],
                },
                {
                    title: 'Untra',
                    href: 'untra',
                    icon: 'untra',
                    iconSrc: require('~/assets/images/project-icons/untra-logo.png'),
                    logoList: [
                        require('~/assets/images/logos/logo-wordpress.png'),
                        require('~/assets/images/logos/logo-adobe.png'),
                    ],
                },
                {
                    title: 'Personal Work',
                    href: 'personal',
                    icon: 'personal',
                    iconSrc: require('~/assets/images/project-icons/personal-logo.png'),
                    logoList: [
                        require('~/assets/images/logos/logo-threejs.png'),
                        require('~/assets/images/logos/logo-vue.png'),
                        require('~/assets/images/logos/logo-nuxt.png'),
                        require('~/assets/images/logos/logo-node.png'),
                        require('~/assets/images/logos/logo-sass.png'),
                    ],
                },
            ];
        },
    },
};
</script>

<style lang="scss" scoped>

.project-row {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include bp(tablet) {
        flex-direction: row;
        flex-wrap: wrap;
    }
    @include bp(laptop) {
        flex-wrap: nowrap;
    }
}

.project-wrapper {
    width: 100%;
    background-color: darken($eggshell-color, 2%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    padding: 0;
    transition: 0.25s all;
    border: 2px solid $site-base-color;
    margin-bottom: 40px;

    @include bp(tablet) {
        width: 44%;
    }
    @include bp(laptop) {
        width: 24%;
        margin-bottom: 0;
    }
}

.project-info {
    color: $dark-text;
    .title {
        margin-top: 0px;
        margin-left: 5px;
        font-weight: 300;
    }
}

a[class*="icon-"] {
    .icon-wrapper {
        min-height: 50vh;
        padding: 10px;
        position: relative;

        .icon {
            position: absolute;
            max-width: 55%;

            &.mid {
                opacity: 0.65;
            }

            &.light {
                opacity: 0.25;
            }
        }
    }

    &:hover {
        .dark {
            animation: icon-fade-dark 2.5s;
        }
        .mid {
            animation: icon-fade-mid 2.5s;
        }
        .light {
            animation: icon-fade-light 2.5s;
        }
    }

    &[class*="-tidal"] {
        .icon {
            max-width: 70%;
            top: 0;
            left: 50%;
            transform: translateX(-60%) rotate(-10deg);

            &.mid {
                top: 25%;
                left: 50%;
                transform: translateX(-51%) rotate(-10deg);
            }

            &.light {
                top: 50%;
                left: 56%;
                transform: translateX(-50%) rotate(-10deg);
            }
        }
    }

    &[class*="-delaware"] {
        .icon {
            bottom: 5%;
            left: 5%;
            transform: rotate(80deg);

            @include bp(laptop) {
                bottom: 10%;
            }

            &.mid {
                bottom: 35%;
                left: 15%;
                transform: rotate(110deg);

                @include bp(laptop) {
                    bottom: 40%;
                }
            }

            &.light {
                bottom: 60%;
                left: 35%;
                transform: rotate(130deg);

                @include bp(laptop) {
                    bottom: 65%;
                }
            }
        }
    }
    &[class*="-untra"] {
        .icon {
            top: 38%;
            left: 35%;
            transform: rotate(-20deg);

            &.mid {
                top: 27%;
                left: 5%;
                transform: rotate(60deg);
            }

            &.light {
                top: 2%;
                left:10%;
                transform: rotate(150deg);
            }
        }
    }
    &[class*="-personal"] {
        .icon {
            top: 60%;
            left: 15%;
            transform: rotate(-10deg);

            &.mid {
                top: 30%;
                left: 40%;
                transform: rotate(30deg);
            }

            &.light {
                top: 0;
                left:5%;
                transform: rotate(-30deg);
            }
        }
    }
}

@keyframes icon-fade-dark {
    0% {
        opacity: 0;
    }
    30% {
        opacity: 0;
    }
    65% {
        opacity: 1;
    }
}
@keyframes icon-fade-mid {
    0% {
        opacity: 0;
    }
    20% {
        opacity: 0;
    }
    45% {
        opacity: .65;
    }
}
@keyframes icon-fade-light {
    0% {
        opacity: 0;
    }
    10% {
        opacity: 0;
    }
    25% {
        opacity: .25;
    }
}
</style>
