<template>
    <top-section/>
    <sale-section/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopSection from '@/components/Home/TopSection.vue'
import useApi from '@/hooks/useApi';
import storeApi from '@/api/storeApi';
import { useProductsStore } from '@/stores/useProductsStore';
import SaleSection from '@/components/Home/SaleSection.vue';

export default defineComponent({
    components: { TopSection, SaleSection },
    setup() {
        const { setProducts } = useProductsStore();
        const [ requestProducts, products, loading, error ] = useApi(storeApi.getCatalog);
        requestProducts.value();

        return {
            loading, 
            error, 
            products, 
            setProducts,
        };
    },
    watch: {
        loading() {
            this.setProducts(this.products);
        }
    }
})
</script>

<style scoped>

</style>