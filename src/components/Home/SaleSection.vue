<template>
    <section class="sale-section">
        <div class="sale-section__container container">
            <h3 class="sale-section__title">
                <span v-text="'#MODNIKKY'"></span><span v-text="'_Sale'"
                    class="sale-section__title sale-section__title--bold"></span>
            </h3>
            <spinner-loader v-if="loading" />
            <app-swiper :products="filteredProducts" v-else />
        </div>
    </section>
</template>

<script lang="ts">
import { useProductsStore } from '@/stores/useProductsStore';
import { defineComponent, computed } from 'vue'
import ProductCard from './ProductCard.vue'
import AppSwiper from '@/components/UI/Swiper/AppSwiper.vue'
import SpinnerLoader from '../UI/Loaders/SpinnerLoader.vue'
import { useSortingOptionsStore } from '@/stores/useSortingOptionsStore';
import { filterProducts } from '@/utils';

export default defineComponent({
    name: 'sale-section',
    components: { ProductCard, AppSwiper, SpinnerLoader },
    props: {
        loading: {
            type: Boolean
        }
    },
    setup() {
        const productsStore = useProductsStore();
        const sortingOptions = useSortingOptionsStore();
        const filteredProducts = computed(() => filterProducts(productsStore.getProducts, sortingOptions.getSearch));

        return {
            filteredProducts
        };
    }
})
</script>

<style scoped>

</style>