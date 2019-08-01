<template>
    <main class="content-wrapper">
        <div class="centered">
            <img class="warning" src="~/assets/images/warning.gif" alt="">
            <h3>Uhhh.... where are you going?</h3>
            <div class="back" @click="backLink">
                <img class="backfinger" src="~/assets/images/backfinger.gif" alt="">
                <img class="warning" src="~/assets/images/goback.gif" alt="">
            </div>
        </div>
    </main>
</template>

<script>
export default {
    methods: {
        backLink () {
            this.$router.go(-1);
        },
    },
};
</script>

<style lang="scss" scoped>
.centered {
    flex-direction: column;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0; right: 0;
}

.back {
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
}

.backfinger {
    height: max-content;
}
</style>
