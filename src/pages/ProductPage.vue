<template>
    <section class="product">
        <spinner-loader v-if="loading" />
        <div v-else class="product__container">
            <product-gallery :images="product.images" />
            <product-bar />
        </div>
    </section>
</template>

<script lang="ts">
import storeApi from '@/api/storeApi';
import ProductBar from '@/components/Product/ProductBar.vue';
import ProductGallery from '@/components/Product/ProductGallery.vue';
import SpinnerLoader from '../UI/Loaders/SpinnerLoader.vue'
import { useApi } from '@/composables';
import { useProductsStore } from '@/stores/useProductsStore';
import type { TProduct } from '@/types/types';
import { defineComponent, reactive } from 'vue'
import { useRoute } from 'vue-router';
import { formatAvailableSizes } from '@/utils';

export default defineComponent({
    name: 'product-page',
    components: { ProductGallery, ProductBar },
    setup() {
        const [requestProducts, products, loading, error] = useApi(storeApi.getCatalog);
        const productsStore = useProductsStore();
        const route = useRoute();
        const productId = route.params.id as string;
        const hasProducts = Boolean(productsStore.getProducts.length);
        let product = reactive({} as TProduct);

        if (hasProducts) {
            product = productsStore.getProductById(productId) as TProduct;
        } else {
            requestProducts.value();
        }

        return {
            product,
            loading,
            products,
            setProducts: productsStore.setProducts,
            getProductById: productsStore.getProductById,
            productId
        }
    },
    watch: {
        loading() {
            const formattedProducts = formatAvailableSizes(this.products);
            this.setProducts(formattedProducts);
            this.product = this.getProductById(this.productId) as TProduct;
        },
    }
})
</script>

<style scoped>

</style>