<template>
    <div class="actionsbar">
        <div class="actionsbar__search">
            <img
                class="actionsbar__icon" 
                src="@/assets/icons/search-icon.svg" 
                alt="Search"
            >
            <p class="actionsbar__title">
                SEARCH
            </p>
        </div>
        <div class="actionsbar__auth">
            <p class="actionsbar__title">
                SIGN IN
            </p>
        </div>
        <div class="actionsbar__bag">
            <img
                class="actionsbar__icon-bag" 
                src="@/assets/icons/shopping-cart-icon.svg" 
                alt="Shopping cart"
            >
            <p class="actionsbar__title">
                BAG
                <span class="actionsbar__bag-amount">
                    <!-- amount -->
                </span>
            </p>
        </div>
        <div class="actionsbar__wishlist">
            <img 
                class="actionsbar__icon"
                src="@/assets/icons/wishlist-icon.svg" 
                alt="Wish list"
            >
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'actionsbar'
})
</script>

<style scoped>

</style>