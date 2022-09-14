import { defineStore } from "pinia";
import type { TSortingOptionsState } from "./types";

export const useSortingOptionsStore = defineStore({
    id: "sorting-options",
    state: (): TSortingOptionsState => ({
        search: '',
        selectedCategory: ''
    }),
    getters: {
        getSearch(state) {
            return state.search;
        },
        getSelectedCategory(state) {
            return state.selectedCategory;
        }
    },
    actions: {
        setSearch(search: string) {
            this.search = search.toLowerCase();
        },
        setSelectedCategory(selectedCategory: string) {
            this.selectedCategory = selectedCategory;
        }
    },
})