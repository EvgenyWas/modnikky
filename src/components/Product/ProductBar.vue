<template>
    <div class="product__bar">
        <h2 class="product__title">
            {{ product.name }}
        </h2>
        <product-attributes
            :price="product.price"
            :color="product.color"
            :sizes="product.availableSizes"
        />
        <product-button/>
        <product-details/>
    </div>
</template>

<script lang="ts">
import { useProductsStore } from '@/stores/useProductsStore';
import type { TProduct } from '@/types/types';
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router';
import ProductButton from '@/components/UI/Buttons/ProductButton.vue';
import ProductAttributes from './ProductAttributes.vue';
import ProductDetails from './ProductDetails.vue';

export default defineComponent({
    name: 'product-bar',
    components: { ProductAttributes, ProductDetails, ProductButton },
    setup() {
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