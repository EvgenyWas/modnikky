<template>
    <nav class="navbar" :class="{
        'navbar--active': isMobileMenuOpen
    }">
        <div v-text="'NEW ARRIVALS'" class="navbar__item"></div>
        <div v-text="'SHOP'" class="navbar__item"></div>
        <div v-text="'COLLECTIONS'" class="navbar__item"></div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'navbar',
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