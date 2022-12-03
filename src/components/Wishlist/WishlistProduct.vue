<template>
    <article class="wishlist-product">
        <div class="wishlist-product__container">
            <div class="wishlist-product__box">
                <img class="wishlist-product__image" :src="product.images[0]" alt="Product image">
                <wishlist-product-bar :product="product" :selected-size="selectedSize" @selecte="selecteSize" />
            </div>
            <div class="wishlist-product__btn-box">
                <button v-text="'ADD TO BAG'" class="wishlist-product__btn"
                    @click="$emit('add', selectedSize)"></button>
                <button class="wishlist-product__btn" @click="$emit('remove')">
                    <img class="wishlist-product__btn-icon" src="@/assets/icons/remove-icon.svg" alt="Remove icon">
                    REMOVE
                </button>
            </div>
        </div>
    </article>
</template>

<script lang="ts">
import type { TProduct } from '@/types/types';
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import WishlistProductBar from './WishlistProductBar.vue'

export default defineComponent({
    name: "wishlist-product",
    components: { WishlistProductBar },
    props: {
        product: {
            type: Object as PropType<TProduct>,
            required: true
        },
    },
    data() {
        return {
            selectedSize: this.product.availableSizes[0]
        }
    },
    methods: {
        selecteSize(size: string) {
            this.selectedSize = size;
        }
    },
})
</script>

<style scoped>

</style>