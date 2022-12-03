import { defineStore } from "pinia";
import type { TSortingOptionsState } from "./types";

const getDefaultState = (): TSortingOptionsState => ({
  search: "",
  isSearchActive: false,
  selectedCategory: "",
});

export const useSortingOptionsStore = defineStore("sortingOptionsStore", {
  state: () => getDefaultState(),
  getters: {
    getSearch(state) {
      return state.search;
    },
    getIsSearchActive(state) {
      return state.isSearchActive;
    },
    getSelectedCategory(state) {
      return state.selectedCategory;
    },
  },
  actions: {
    setSearch(search: string) {
      this.search = search.toLowerCase();
    },
    setActiveSearch() {
      this.isSearchActive = true;
    },
    setInactiveSearch() {
      this.isSearchActive = false;
    },
    setSelectedCategory(selectedCategory: string) {
      this.selectedCategory = selectedCategory;
    },
  },
});
