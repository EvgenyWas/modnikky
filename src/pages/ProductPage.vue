<template>
    <section class="product">
        <div class="product__container">
            <product-gallery :images="product.images"/>
            <product-bar/>
        </div>
    </section>
</template>

<script lang="ts">
import ProductBar from '@/components/Product/ProductBar.vue';
import ProductGallery from '@/components/Product/ProductGallery.vue';
import { useProductsStore } from '@/stores/useProductsStore';
import type { TProduct } from '@/types/types';
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'product-page',
    components: { ProductGallery, ProductBar },
    setup () {
        const productsStore = useProductsStore();
        const route = useRoute();
        const product = productsStore.getProductById(route.params.id as string) as TProduct;

        return {
            product
        }
    }
})
</script>

<style scoped>

</style>