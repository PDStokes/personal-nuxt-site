<template>
    <nav class="nav-bar-wrapper">
        <ul class="nav-bar">
            <li class="nav-item">
                <nuxt-link class="nav-link noselect" to="/">Solar System</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link noselect" to="/missions">Mission Log</nuxt-link>
            </li>
            <li class="nav-item">
                <a class="nav-link noselect" href="/Stokes_CV.pdf" download>Status Report (CV)</a>
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
    background-color: $site-base-color;
}

.nav-bar {
    max-width: $max-content-width + 25px;
    width: 100%;
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @include bp(not-phone) {
        padding: 10px 15px;
        justify-content: flex-start;
    }
}

.nav-item {
    min-width: 100px;
    border-radius: 5px;
    list-style: none;
    text-align: center;

    &:hover{
        background-color: darken($site-base-color, 10%);
        cursor: pointer;
    }

    .nav-link {
        display: block;
        padding: 5px 10px;
        color: white;
    }

    & > .nuxt-link-exact-active {
        background-color: darken($site-base-color, 10%);
        border-radius: 5px;
    }
}
</style>
