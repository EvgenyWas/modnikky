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
                    v-if="hasProductInWishlist"
                    class="product-card__like"
                    src="@/assets/icons/liked-icon.svg" 
                    alt="Like icon"
                    @click="handleLikeClick"
                >
                <img 
                    v-else
                    class="product-card__like"
                    src="@/assets/icons/like-icon.svg" 
                    alt="Like icon"
                    @click="handleLikeClick"
                >
                <add-to-bag-button />
                <div class="product-card__cover"></div>
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
import { useBagStore } from '@/stores/useBagStore'
import AddToBagButton from '@/components/UI/Buttons/AddToBagButton.vue'
import { findSameInWishlist } from '@/utils/utils'

export default defineComponent({
    name: 'product-card',
    components: { AddToBagButton },
    props: {
        product: {
            type: Object as PropType<TProduct>,
            required: true
        }
    },
    data() {
        return {
            hasProductInWishlist: false
        }
    },
    setup() {
        const wishlist = useWishlistStore();
        const { setProductToBag } = useBagStore();

        return {
            wishlist,
            setProductToBag
        }
    },
    methods: {
        handleLikeClick() {
            const sameProduct = findSameInWishlist(this.product, this.wishlist.getWishlist);

            if (!sameProduct) {
                this.wishlist.setProductToWishlist(this.product);
                this.hasProductInWishlist = true;
            } else {
                this.wishlist.removeProductFromWishlist(this.product.id);
                this.hasProductInWishlist = false;
            }
        }
    }
})
</script>

<style scoped>

</style>