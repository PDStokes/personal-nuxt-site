<template>
    <main class="content-wrapper">
        <transition appear appear-active-class="slide-in">
            <h1 ref="pageTitle">Jayz ICON</h1>
        </transition>

        <transition appear appear-active-class="fade-in">
            <section ref="pageContent" style="animation-delay: 0.25s">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab sequi dolorum magni aliquam eum asperiores, error nobis distinctio! Fugit, qui vel quas explicabo labore dolor. Voluptates, dolor. Tenetur, dolore?</p>
            </section>
        </transition>
    </main>
</template>

<script>
import { leaveAnim } from '~/plugins/cardAnimation.js';

export default {
    name: 'JAYZICON',
    mixins: [leaveAnim],
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
