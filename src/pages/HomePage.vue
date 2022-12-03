<template>
    <top-section />
    <categories-section v-if="!sortingOptions.getSelectedCategory" />
    <category-section v-else />
    <sale-section :loading="loading" />
    <shop-section />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopSection from '@/components/Home/TopSection.vue'
import useApi from '@/hooks/useApi';
import storeApi from '@/api/storeApi';
import { useProductsStore } from '@/stores/useProductsStore';
import SaleSection from '@/components/Home/SaleSection.vue';
import { formatAvailableSizes } from '@/utils';
import ShopSection from '@/components/Home/ShopSection.vue';
import CategoriesSection from '@/components/Home/CategoriesSection.vue';
import { useSortingOptionsStore } from '@/stores/useSortingOptionsStore';
import CategorySection from '@/components/Home/CategorySection.vue';
import { ESortingOptions } from '@/config';

export default defineComponent({
    name: 'home-page',
    components: { TopSection, SaleSection, ShopSection, CategoriesSection, CategorySection },
    setup() {
        const { setProducts } = useProductsStore();
        const sortingOptions = useSortingOptionsStore();
        const [requestProducts, products, loading, error] = useApi(storeApi.getCatalog);

        requestProducts.value();

        return {
            loading,
            error,
            products,
            setProducts,
            sortingOptions
        };
    },
    watch: {
        loading() {
            const formattedProducts = formatAvailableSizes(this.products);
            this.setProducts(formattedProducts);
        },
        $route({ fullPath }) {
            if (fullPath.includes('/home') && !fullPath.includes(ESortingOptions.CATEGORY)) {
                this.sortingOptions.setSelectedCategory('');
            }
        }
    }
})
</script>

<style scoped>

</style>