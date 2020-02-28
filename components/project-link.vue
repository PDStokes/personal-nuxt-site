<template>
    <a
        v-scroll
        :href="href"
        target="_blank"
        class="banner"
    >
        <i class="fas fa-external-link-alt external-link" />
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
    },
};
</script>
