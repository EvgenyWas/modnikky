<template>
    <header class="header" :class="{
        'header--home': $route.name === 'home'
    }">
        <div class="header__container">
            <navbar :is-mobile-menu-open="isMobileMenuOpen" />
            <mobile-menu :is-mobile-menu-open="isMobileMenuOpen" v-on:change="changeMobileMenuState" />
            <div class="header__title-box">
                <h1 v-text="'MODNIKKY'" class="header__title" @click="$router.push('/home')"></h1>
            </div>
            <actionsbar />
            <app-search />
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './Navbar.vue';
import Actionsbar from './Actionsbar.vue';
import MobileMenu from './MobileMenu.vue';
import AppSearch from './Search.vue';

export default defineComponent({
    name: 'app-header',
    components: { Navbar, Actionsbar, MobileMenu, AppSearch },
    data() {
        return {
            isMobileMenuOpen: false
        }
    },
    methods: {
        changeMobileMenuState() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        }
    }
})
</script>

<style scoped>

</style>