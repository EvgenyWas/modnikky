<template>
    <div class="product__bar">
        <h2 v-text="product.name" class="product__title"></h2>
        <product-attributes :price="product.price" :color="product.color" :sizes="product.availableSizes"
            :selected-size="selectedSize" @selecte="selecteSize" />
        <product-button :title="'ADD TO BAG'" :is-in-wishlist="isInWishlist" @add-to-bag="addProductToBag"
            @handle-wishlist="handleWishlist" />
        <product-details :description="product.description" />
    </div>
</template>

<script lang="ts">
import { useProductsStore } from '@/stores/useProductsStore';
import type { TProduct } from '@/types/types';
import { computed, defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import ProductButton from '@/components/UI/Buttons/ProductButton.vue';
import ProductAttributes from './ProductAttributes.vue';
import ProductDetails from './ProductDetails.vue';
import { useWishlistStore } from '@/stores/useWishlistStore';
import { useBagStore } from '@/stores/useBagStore';
import { convertToBagItem, findSameInBag } from '@/utils';

export default defineComponent({
    name: 'product-bar',
    components: { ProductAttributes, ProductDetails, ProductButton },
    setup() {
        const productsStore = useProductsStore();
        const wishlistStore = useWishlistStore();
        const bag = useBagStore();
        const route = useRoute();

        const productId = route.params.id as string;
        const product = productsStore.getProductById(productId) as TProduct;
        const selectedSize = ref<string>(product.availableSizes[0]);
        const isInWishlist = computed<boolean>(() => !!wishlistStore.getProductById(productId));

        function selecteSize(size: string) {
            selectedSize.value = size;
        };

        return {
            product,
            selectedSize,
            selecteSize,
            wishlistStore,
            isInWishlist,
            bag
        }
    },
    methods: {
        addProductToBag() {
            const convertedProduct = convertToBagItem(this.product, this.selectedSize);
            const sameProduct = findSameInBag(convertedProduct, this.bag.getBag);

            if (sameProduct || sameProduct === 0) {
                this.bag.setSameProductToBag(convertedProduct);
            } else {
                this.bag.setProductToBag(convertedProduct);
            }
        },
        handleWishlist() {
            const sameProduct = this.wishlistStore.getProductById(this.product.id);

            if (sameProduct) {
                this.wishlistStore.removeProductFromWishlist(this.product.id)
            } else {
                this.wishlistStore.setProductToWishlist(this.product);
            }
        }
    }
})
</script>

<style scoped>

</style>