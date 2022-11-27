<template>
    <section class="wishlist">
        <div class="wishlist__container container">
            <h2 class="wishlist__title">
                WISH LIST
                <span class="wishlist__amount">
                    {{ wishlistAmount }}
                </span>
            </h2>
            <TransitionGroup name="list" tag="div" class="wishlist_products">
                <wishlist-product v-for="product in wishlist.getWishlist" :key="product.id" :product="product"
                    @remove="wishlist.removeProductFromWishlist(product.id)"
                    @add="(selectedSize: string) => addToBag(product, selectedSize)" />
            </TransitionGroup>
        </div>
    </section>
</template>

<script lang="ts">
import { useBagStore } from '@/stores/useBagStore';
import { useWishlistStore } from '@/stores/useWishlistStore';
import type { TProduct } from '@/types/types';
import { convertToBagItem, getCorrectItemsAmountString } from '@/utils/utils';
import { computed, defineComponent, TransitionGroup } from 'vue';
import WishlistProduct from '../components/Wishlist/WishlistProduct.vue';

export default defineComponent({
    name: 'wishlist-page',
    components: { WishlistProduct, TransitionGroup },
    setup() {
        const wishlist = useWishlistStore();
        const bagStore = useBagStore();
        const wishlistAmount = computed(() => getCorrectItemsAmountString(wishlist.getWishlist.length));

        return {
            wishlist,
            bagStore,
            wishlistAmount
        };
    },
    methods: {
        addToBag(product: TProduct, selectedSize: string) {
            this.bagStore.setProductToBag(convertToBagItem(product, selectedSize));
        }
    }
})
</script>

<style scoped>

</style>