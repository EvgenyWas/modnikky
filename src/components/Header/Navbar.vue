<template>
    <nav class="navbar" :class="{
        'navbar--active': isMobileMenuOpen
    }">
        <div class="navbar__item">
            NEW ARRIVALS
        </div>
        <div class="navbar__item">
            SHOP
        </div>
        <div class="navbar__item">
            COLLECTIONS
        </div>
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