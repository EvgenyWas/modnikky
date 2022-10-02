<template>
    <button 
        class="mobile-menu"
        :class="{
            'mobile-menu--active': isMobileMenuOpen
        }"
    >
        <img
            class="mobile-menu__burger"
            src="@/assets/icons/hamburger-menu-icon.svg" 
            alt="Hamburger menu"
            @click="$emit('change')"
            v-if="!isMobileMenuOpen"
        >
        <img
            class="mobile-menu__close"
            src="@/assets/icons/remove-icon.svg" 
            alt="Hamburger menu"
            @click="$emit('change')"
            v-else
        >
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'mobile-menu',
    props: {
        isMobileMenuOpen: {
            type: Boolean,
            required: true
        }
    }
})
</script>

<style scoped>

</style>