<template>
    <a
        v-scroll
        :href="href"
        target="_blank"
        class="example-banner"
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

<style lang="scss" scoped>
.example-banner {
    position: relative;
    display: block;
    white-space: nowrap;
    opacity: 0;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(-45deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.75) 100%);
        opacity: 1;
        transition: opacity 0.35s;
    }

    &:hover {
        &::before {
            opacity: 0;
        }
        .external-link {
            opacity: 0.8;
        }
    }

    img {
        width: 100%;
        display: block;
        z-index: 0;
    }
}

.external-link {
    font-size: 2rem;
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    opacity: 0.35;
    transition: opacity 0.35s;
    z-index: 5;

    @include bp(laptop) {
        font-size: 3rem;
    }
}
</style>
