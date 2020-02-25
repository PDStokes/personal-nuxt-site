<template>
    <div class="video-wrapper">
        <video controls preload="none" width="1280" height="720" :poster="require(`~/assets/${posterSrc}`)">
            <source :src="require(`~/assets/${videoSrc}`)" type="video/mp4">
        </video>
    </div>
</template>

<script>
export default {
    props: {
        posterSrc: {
            type: String,
            required: true,
        },
        videoSrc: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
video {
    background: black;
    width: 100%;
}
</style>
