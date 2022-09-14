<template>
    <article class="product-card">
        <div class="product-card__box">
            <div class="product-card__image-block">
                <img 
                    class="product-card__image"
                    :src="product.images[0]" 
                    alt="Product image"
                >
                <img 
                    class="product-card__like"
                    src="@/assets/icons/like-icon.svg" 
                    alt="Like icon"
                    @click="setProductToWishlist(product)"
                >
            </div>
            <p class="product-card__price">
                {{ '$' + Number(product.price.value).toFixed(2) }}
            </p>
        </div>
    </article>
</template>

<script lang="ts">
import type { TProduct } from '@/types/types'
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { useWishlistStore } from '@/stores/useWishlistStore'

export default defineComponent({
    name: 'product-card',
    props: {
        product: {
            type: Object as PropType<TProduct>,
            required: true
        }
    },
    setup() {
        const { setProductToWishlist } = useWishlistStore();

        return {
            setProductToWishlist
        }
    }
})
</script>

<style scoped>

</style>