import { useStorage } from "@/composables";
import { STORAGE_KEYS } from "@/config";
import type { TProduct } from "@/types/types";
import { defineStore } from "pinia";
import type { TWishlistState } from "./types";

const getDefaultState = (): TWishlistState => ({
  wishlist: [],
});

const storage = useStorage(STORAGE_KEYS.WISH_LIST, getDefaultState());
const storageWishlist = storage.storageValue.value?.wishlist ?? [];

export const useWishlistStore = defineStore("wishlistStore", {
  state: () => getDefaultState(),
  getters: {
    getWishlist(state) {
      const isActualWishlist = storageWishlist.length === this.wishlist.length;
      if (!isActualWishlist) {
        this.wishlist = storageWishlist;
      }

      return state.wishlist;
    },
    getProductById(state) {
      return (productId: string) =>
        state.wishlist.find((product) => productId === product.id);
    },
  },
  actions: {
    setProductToWishlist(product: TProduct) {
      this.wishlist.push(product);
      storage.setItem({ wishlist: this.wishlist });
    },
    removeProductFromWishlist(productId: string) {
      this.wishlist = this.wishlist.filter(
        (product) => productId !== product.id
      );
      storage.setItem({ wishlist: this.wishlist });
    },
  },
});
