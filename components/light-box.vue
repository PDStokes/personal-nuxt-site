<template>
    <transition name="fade">
        <div v-show="visible" class="lightbox" @click="hideLB">
            <img
                :src="getImgSrc"
                :alt="imageAlt"
                class="main-image"
            >
        </div>
    </transition>
</template>

<script>
export default {
    data () {
        return {
            imageSrc: '',
            imageAlt: '',
            visible: false,
        };
    },
    computed: {
        getImgSrc () {
            return this.imageSrc.length ? require(`~/assets/${this.imageSrc}`) : '';
        },
    },
    methods: {
        hideLB () {
            this.$lightBox.hideLightBox();
        },
    },
};
</script>

<style lang="scss" scoped>
.lightbox {
    position: fixed;
    white-space: nowrap;
    margin: auto;
    width: 100%;
    z-index: 1000;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.75);
    cursor: pointer;
}

.main-image {
    position: absolute;
    left: 0; right: 0;
    margin: auto;
    max-width: 95%;
    max-height: 90vh;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1001;
    pointer-events: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to,
.fade-leave-active
{
  opacity: 0
}
</style>
