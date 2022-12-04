import { useStorage } from "@/composables";
import { STORAGE_KEYS } from "@/config";
import type { TBagItem } from "@/types/types";
import { findSameInBag } from "@/utils";
import { defineStore } from "pinia";
import type { TBagState } from "./types";

const getDefaultState = (): TBagState => ({
  bag: [],
  amount: 0,
});

const storage = useStorage(STORAGE_KEYS.BAG, getDefaultState());
const storageBag = storage.storageValue.value?.bag ?? [];
const storageAmount = storage.storageValue.value?.amount ?? 0;

export const useBagStore = defineStore("bagStore", {
  state: () => getDefaultState(),
  getters: {
    getBag(state) {
      const isActualBag = storageBag.length === this.bag.length;
      if (!isActualBag) {
        this.bag = storageBag;
      }

      return state.bag;
    },
    getBagAmount(state) {
      const isActualAmount = storageAmount === this.amount;
      if (!isActualAmount) {
        this.amount = storageAmount;
      }

      return state.amount;
    },
    getBagTotal(state) {
      const total = state.bag.reduce((acc, item) => {
        return (acc += Number(item.price.value) * item.quantity);
      }, 0);

      return total;
    },
  },
  actions: {
    setProductToBag(product: TBagItem) {
      this.$patch({
        bag: [...this.bag, product],
        amount: this.amount + 1,
      });
      storage.setItem({
        bag: this.bag,
        amount: this.amount,
      });
    },
    setSameProductToBag(product: TBagItem) {
      const sameProduct = findSameInBag(product, this.bag) as number;
      const newBag = [...this.bag];
      newBag[sameProduct].quantity += 1;

      this.$patch({
        bag: newBag,
        amount: this.amount + 1,
      });
      storage.setItem({
        bag: this.bag,
        amount: this.amount,
      });
    },
    removeProductFromBag(product: TBagItem) {
      const filteredBag = this.bag.filter(
        (item) =>
          item.selectedSize !== product.selectedSize || item.id !== product.id
      );

      this.$patch({
        bag: filteredBag,
        amount: this.amount - product.quantity,
      });
      storage.setItem({
        bag: this.bag,
        amount: this.amount,
      });
    },
    decreaseProductQuantity(product: TBagItem) {
      if (product.quantity === 1) {
        this.removeProductFromBag(product);
        return;
      }

      const newBag = this.bag.map((item) => {
        if (
          product.id === item.id &&
          product.selectedSize === item.selectedSize
        ) {
          item.quantity -= 1;
        }

        return item;
      });

      this.$patch({
        bag: newBag,
        amount: this.amount - 1,
      });
      storage.setItem({
        bag: this.bag,
        amount: this.amount,
      });
    },
  },
});
