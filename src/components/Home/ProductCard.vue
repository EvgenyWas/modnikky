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
                <add-to-bag-button @click="addProductToBag" />
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
import { convertToBagItem, findSameInBag, findSameInWishlist } from '@/utils/utils'

export default defineComponent({
    name: 'product-card',
    components: { AddToBagButton },
    props: {
        product: {
            type: Object as PropType<TProduct>,
            required: true
        }
    },
    setup() {
        const wishlist = useWishlistStore();
        const bag = useBagStore();

        return {
            wishlist,
            bag
        }
    },
    methods: {
        handleLikeClick() {
            const sameProduct = findSameInWishlist(this.product, this.wishlist.getWishlist);

            if (!sameProduct) {
                this.wishlist.setProductToWishlist(this.product);
            } else {
                this.wishlist.removeProductFromWishlist(this.product.id);
            }
        },
        addProductToBag() {
            const convertedProduct = convertToBagItem(this.product, this.product.availableSizes[0]);
            const sameProduct = findSameInBag(convertedProduct, this.bag.getBag);

            if (sameProduct || sameProduct === 0) {
                this.bag.setSameProductToBag(convertedProduct);
            } else {
                this.bag.setProductToBag(convertedProduct);
            }
        }
    },
    computed: {
        hasProductInWishlist() {
            return findSameInWishlist(this.product, this.wishlist.getWishlist);
        }
    }
})
</script>

<style scoped>

</style>