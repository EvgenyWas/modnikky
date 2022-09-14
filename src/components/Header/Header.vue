<template>
    <header 
        class="header"
        :class="{
            'header--home': $route.name === 'home'
        }"
    >
        <div class="header__container">
            <navbar/>
            <h1 class="header__title">
                MODNIKKY
            </h1>
            <actionsbar/>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './Navbar.vue';
import Actionsbar from './Actionsbar.vue';

export default defineComponent({
    name: 'my-header',
    components: {
        Navbar, Actionsbar
    }
})
</script>

<style scoped>

</style>