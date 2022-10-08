<template>
    <div class="product-button">
        <button 
            class="product-button__bag-btn"
        >
            {{ title }}
        </button>
        <button 
            class="product-button__wishlist-btn"
        >
            <img src="@/assets/icons/like-icon.svg" alt="Wishlist icon">
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'product-button',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
})
</script>

<style scoped>

</style>