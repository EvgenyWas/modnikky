<template>
    <header 
        class="header"
        :class="{
            'header--home': $route.name === 'home'
        }"
    >
        <div class="header__container">
            <navbar 
                :is-mobile-menu-open="isMobileMenuOpen"
            />
            <mobile-menu
                :is-mobile-menu-open="isMobileMenuOpen"
                v-on:change="changeMobileMenuState"
            />
            <h1 class="header__title" @click="$router.push('/home')">
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
import MobileMenu from './MobileMenu.vue';

export default defineComponent({
    name: 'my-header',
    components: {
    Navbar,
    Actionsbar,
    MobileMenu
},
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