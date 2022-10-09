import type { TProduct } from "@/types/types";
import { defineStore } from "pinia";
import type { TWishlistState } from "./types";

export const useWishlistStore = defineStore({
    id: "wishlist",
    state: (): TWishlistState => ({
        wishlist: []
    }),
    getters: {
        getWishlist(state) {
            return state.wishlist;
        },
        getProductById(state) {
            return (productId: string) => state.wishlist.find(product => productId === product.id);
        }
    },
    actions: {
        setProductToWishlist(product: TProduct) {
            this.wishlist.push(product);
        },
        removeProductFromWishlist(productId: string) {
            this.wishlist = this.wishlist.filter(product => productId !== product.id);
        }
    }
})