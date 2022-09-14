import type { TProduct } from '@/types/types';
import { defineStore } from 'pinia';
import type { TProductsState } from "./types";

export const useProductsStore = defineStore({
    id: 'products',
    state: (): TProductsState => ({
        products: [],
    }),
    getters: {
        getProducts(state) {
            return state.products;
        },
        getProductById(state) {
            return (productId: string) => state.products.filter(product => productId === product.id);
        },
        getProductByCategory(state) {
            return (category: string) => state.products.filter(product => category === product.type);
        }
    },
    actions: {
        setProducts(products: TProduct[]) {
            this.products = products;
        }
    }
})