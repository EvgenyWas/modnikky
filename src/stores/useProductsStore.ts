import type { TProduct } from "@/types/types";
import { defineStore } from "pinia";
import type { TProductsState } from "./types";

const getDefaultState = (): TProductsState => ({
  products: [],
});

export const useProductsStore = defineStore("productsStore", {
  state: () => getDefaultState(),
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProductById(state) {
      return (productId: string) =>
        state.products.find((product) => productId === product.id);
    },
    getProductsByCategory(state) {
      return (category: string) =>
        state.products.filter(
          (product) => category === product.type.toLowerCase()
        );
    },
  },
  actions: {
    setProducts(products: TProduct[]) {
      this.products = products;
    },
  },
});
