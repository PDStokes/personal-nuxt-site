<template>
    <transition-group ref="cardRow" appear appear-active-class="fade-in" class="project-row" tag="div">
        <nuxt-link
            v-for="(project, index) in projects"
            :key="project.title"
            class="card-wrapper"
            :style="{background: `url(${project.bgImg}) center / cover no-repeat`, animationDelay: 0.15 * index + `s`}"
            :to="project.href"
            append
        >
            <div class="card-logos">
                <img
                    v-for="logo in project.logoList"
                    :key="logo"
                    class="logo"
                    :src="logo"
                >
            </div>
            <div class="card-info">
                <h2>{{ project.title }}</h2>
            </div>
        </nuxt-link>
    </transition-group>
</template>

<script>
export default {
    props: {
        projects: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>

.project-row {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @include bp(not-phone) {
        flex-direction: row;
        flex-wrap: wrap;
    }
}

.card-wrapper {
    position: relative;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-radius: 5px;
    transition: transform 0.5s;
    color: black;
    width: 100%;
    margin-bottom: 3rem;
    z-index: 1;
    min-height: 15rem;

    @include bp(not-phone) {
        width: 30%;
    }

    &:after {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        border: 1px solid rgba(0,0,0,.05);
        border-radius: 5px;
        content: '';
        z-index: 10;
    }

    &:hover {
        .card-logos {
            opacity: 1;
        }
    }
}

.card-info {
    bottom: 0; left: 0; right: 0;
    background-color: white;
    width: 100%;
    position: absolute;
    z-index: 5;
}

.card-logos {
    background-color: rgba(238, 238, 238, 0.95);
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    padding: 10px;
    padding-bottom: 4rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index: 0;
    transition: opacity 0.5s;

    @include bp(tablet) {
        opacity: 0;
    }

}

.logo {
    width: 24%;
    margin: 5px 4%;
    max-height: 45%;
    filter: drop-shadow( 0px 0px 3px rgba(0,0,0,0.15) );
}

h2 {
    margin: 0;
    padding: 15px 10px;
}
</style>
