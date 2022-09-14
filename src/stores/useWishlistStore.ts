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