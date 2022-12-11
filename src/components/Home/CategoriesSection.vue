<template>
  <section v-lazy-container="{ selector: 'img' }" class="categories-section">
    <div class="categories-section__container container">
      <h3 class="categories-section__title">
        Shop by the
        <span
          v-text="'Category'"
          class="categories-section__title categories-section__title--bold"
        ></span>
      </h3>
      <div class="categories-section__items">
        <category-item
          v-for="category in categories"
          :key="category"
          :title="capitalizeTitle(category)"
          :data-src="`/src/assets/categories/${category}-category-image.svg`"
          :alt="`${category} image`"
          @click="selecteCategory(category)"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { CATEGORIES, SORTING_OPTIONS } from "@/config";
import { useSortingOptionsStore } from "@/stores/useSortingOptionsStore";
import {
  capitalizeWord,
  getWindowSearchParams,
  pushParamsToWindowHistory,
} from "@/utils";
import { defineComponent } from "vue";
import CategoryItem from "./CategoryItem.vue";

export default defineComponent({
  name: "categories-section",
  components: { CategoryItem },
  data() {
    return {
      categories: CATEGORIES,
    };
  },
  setup() {
    const sortingOptions = useSortingOptionsStore();
    const capitalizeTitle = (title: string) => capitalizeWord(title);

    return {
      sortingOptions,
      capitalizeTitle,
    };
  },
  created() {
    const searchParams = getWindowSearchParams();
    const categoryValue = searchParams.category;

    if (categoryValue) {
      this.sortingOptions.setSelectedCategory(categoryValue);
    }
  },
  methods: {
    selecteCategory(category: string) {
      this.sortingOptions.setSelectedCategory(category);
      pushParamsToWindowHistory(SORTING_OPTIONS.CATEGORY, category);
    },
  },
});
</script>

<style scoped></style>
