<template>
    <div class="actionsbar">
        <div class="actionsbar__search" @click="sortingOptions.setActiveSearch">
            <img class="actionsbar__icon" src="@/assets/icons/search-icon.svg" alt="Search">
            <p class="actionsbar__title">
                SEARCH
            </p>
        </div>
        <div class="actionsbar__auth">
            <p class="actionsbar__title">
                SIGN IN
            </p>
        </div>
        <div class="actionsbar__bag" @click="$router.push('/bag')">
            <img class="actionsbar__icon actionsbar__icon--bag" src="@/assets/icons/shopping-cart-icon.svg"
                alt="Shopping cart">
            <p class="actionsbar__title">
                BAG
            </p>
            <span :class="{ 'actionsbar__bag-amount--active': getBagAmount }" class="actionsbar__bag-amount">
                {{ `(${getBagAmount})` }}
            </span>
        </div>
        <div class="actionsbar__wishlist" @click="$router.push('/wishlist')">
            <img class="actionsbar__icon" src="@/assets/icons/wishlist-icon.svg" alt="Wish list">
        </div>
    </div>
</template>

<script lang="ts">
import { useBagStore } from '@/stores/useBagStore';
import { useSortingOptionsStore } from '@/stores/useSortingOptionsStore';
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'actionsbar',
    setup() {
        const { getBagAmount } = storeToRefs(useBagStore());
        const sortingOptions = useSortingOptionsStore();

        return {
            getBagAmount,
            sortingOptions
        }
    }
})
</script>

<style scoped>

</style>