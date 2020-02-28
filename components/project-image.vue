<template>
    <div
        v-scroll
        class="banner"
        @click="setImage"
    >
        <i class="fas fa-expand external-link" />
        <img
            v-lazyload="{width: imageWidth, height: imageHeight}"
            :data-src="require(`~/assets/${imageSrc}`)"
            :alt="imageAlt"
            class="bw-filter"
        >
    </div>
</template>

<script>
export default {
    props: {
        imageWidth: {
            type: Number,
            required: true,
        },
        imageHeight: {
            type: Number,
            required: true,
        },
        imageSrc: {
            type: String,
            required: true,
        },
        imageAlt: {
            type: String,
            default: '',
        },
        largeImageSrc: {
            type: String,
            required: true,
        },
        largeImageAlt: {
            type: String,
            default: '',
        },
    },
    data () {
        return {
            visible: false,
        };
    },
    mounted () {
        this.$lightBox.createLightbox();
    },
    methods: {
        setImage () {
            this.$lightBox.setImage({ imageSrc: this.largeImageSrc, imageAlt: this.largeImageAlt });
        },
    },
};
</script>
