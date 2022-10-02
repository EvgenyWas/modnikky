<template>
    <section class="categories-section">
        <div class="categories-section__container container">
            <h3 class="categories-section__title">
                Shop by the
                <span 
                    class="categories-section__title categories-section__title--bold"
                >
                    Category
                </span>
            </h3>
            <div class="categories-section__items">
                <category-item
                    v-for="category in categories"
                    :key="category"
                    :title="capitalizeTitle(category)"
                    :src="`/src/assets/categories/${category}-category-image.svg`"
                    :alt="`${category} image`"
                    @click="sortingOptions.setSelectedCategory(category)"
                />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { categories } from '@/config'
import CategoryItem from './CategoryItem.vue'
import { capitalizeWord } from '@/utils/utils'
import { useSortingOptionsStore } from '@/stores/useSortingOptionsStore'

export default defineComponent({
    name: 'categories-section',
    components: {
        CategoryItem
    },
    data() {
        return {
            categories: categories
        }
    },
    methods: {
        capitalizeTitle(title: string) {
            return capitalizeWord(title);
        }
    },
    setup() {
        const sortingOptions = useSortingOptionsStore();

        return {
            sortingOptions
        }
    }
})
</script>

<style scoped>

</style>