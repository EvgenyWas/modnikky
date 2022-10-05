<template>
    <section class="category-section">
        <div class="category-section__container container">
            <h3 class="category-section__title">
                {{ capitalizeCategory() }}
            </h3>
            <div 
                class="category-section__products"
                v-if="getProductsByCategory(sortingOptions.getSelectedCategory).length"
            >
                <product-card 
                    v-for="product in sortProducts(productsAmount)"
                    :key="product.id"
                    :product="product"
                />
            </div>
            <h3 class="category-section__subtitle" v-else>
                {{ `No ${sortingOptions.getSelectedCategory} products found...` }}
            </h3>
            <ring-loader v-show="loading"/>
            <primary-button
                :title="'Show more'"
                blackMode
                @click="increaseProductsAmount"
                v-if="getProductsByCategory(sortingOptions.getSelectedCategory).length > productsAmount"
            />
        </div>
    </section>
</template>

<script lang="ts">
import { useProductsStore } from '@/stores/useProductsStore';
import { useSortingOptionsStore } from '@/stores/useSortingOptionsStore';
import { defineComponent } from 'vue'
import ProductCard from './ProductCard.vue'
import PrimaryButton from '../UI/Buttons/PrimaryButton.vue'
import { capitalizeWord } from '@/utils/utils';
import { paginationCategoryProducts } from '@/config';
import RingLoader from '../UI/Loaders/RingLoader.vue';

export default defineComponent({
    name: "category-section",
    components: { ProductCard, PrimaryButton, RingLoader },
    data() {
        return {
            productsAmount: paginationCategoryProducts,
            loading: false
        }
    },
    setup() {
        const productsStore = useProductsStore();
        const sortingOptions = useSortingOptionsStore();

        return {
            getProductsByCategory: productsStore.getProductsByCategory,
            sortingOptions
        };
    },
    methods: {
        capitalizeCategory() {
            return capitalizeWord(this.sortingOptions.getSelectedCategory);
        },
        sortProducts(productsAmount: number) {
            return this.getProductsByCategory(this.sortingOptions.getSelectedCategory).slice(0, productsAmount);
        },
        increaseProductsAmount() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.productsAmount += paginationCategoryProducts;
            }, 500)
        }
    }
})
</script>

<style scoped>

</style>