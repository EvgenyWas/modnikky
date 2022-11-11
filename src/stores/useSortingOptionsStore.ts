import { defineStore } from "pinia";
import type { TSortingOptionsState } from "./types";

export const useSortingOptionsStore = defineStore("sortingOptionsStore", {
  state: (): TSortingOptionsState => ({
    search: "",
    isSearchActive: false,
    selectedCategory: "",
  }),
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
