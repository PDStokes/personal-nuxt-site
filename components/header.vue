<template>
    <nav class="nav-bar-wrapper">
        <ul class="nav-bar">
            <li class="nav-item">
                <nuxt-link class="nav-link noselect" to="/">Home</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link noselect" to="/projects">Projects</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link noselect" to="/resume">Resume</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.nav-bar-wrapper {
    width: 100%;
    position: fixed;
    z-index: 1000;
    top: 0;
    background-color: #ccc;
}

.nav-bar {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @include bp(not-phone) {
        justify-content: flex-start;
    }
}

.nav-item {
    min-width: 100px;
    border-radius: 5px;
    list-style: none;
    text-align: center;

    &:hover{
        background-color: #bbb;
        cursor: pointer;
    }

    .nav-link {
        display: block;
        padding: 5px 10px;
        color: white;
    }

    & > .nuxt-link-exact-active {
        background-color: #bbb;
        border-radius: 5px;
    }
}
</style>
