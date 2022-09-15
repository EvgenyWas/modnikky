<template>
    <section class="sale-section">
        <div class="sale-section__container container">
            <h3 class="sale-section__title">
                <span>#MODNIKKY</span
                ><span class="sale-section__title sale-section__title--bold">_Sale</span>
            </h3>
            <product-card v-for="product in productsStore.getProducts" :key="product.id" :product="product" />
        </div>
    </section>
</template>

<script lang="ts">
import { useProductsStore } from '@/stores/useProductsStore';
import { defineComponent } from 'vue'
import ProductCard from './ProductCard.vue'

export default defineComponent({
    components: { ProductCard },
    setup() {
        const productsStore = useProductsStore();
        
        return {
            productsStore
        };
    }
})
</script>

<style scoped>

</style>