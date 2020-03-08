<template>
    <a
        v-scroll
        :href="href"
        target="_blank"
        class="banner"
        :download="download"
    >
        <i v-if="download" class="fas fa-file-download external-link" />
        <i v-else class="fas fa-external-link-alt external-link" />
        <img
            v-lazyload="{width: imageWidth, height: imageHeight}"
            :data-src="require(`~/assets/${imageSrc}`)"
            :alt="imageAlt"
        >
    </a>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            required: true,
        },
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
        download: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
