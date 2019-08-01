<template>
    <main class="content-wrapper">
        <transition appear appear-active-class="slide-in">
            <h1>Jayz ICON</h1>
        </transition>
    </main>
</template>

<script>
export default {
    name: 'JAYZICON',
    props: {
        name: {
            type: String,
            default: 'Jayz ICON',
        },
    },
    head () {
        return {
            title: 'JAYZ ICON',
        };
    },
    meta: {
        pageName: 'JAYZ ICON',
    },
};
</script>
