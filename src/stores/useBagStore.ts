import type { TBagItem } from "@/types/types";
import { findSameInBag } from "@/utils";
import { defineStore } from "pinia";
import type { TBagState } from "./types";

export const useBagStore = defineStore("bagStore", {
  state: (): TBagState => ({
    bag: [],
    amount: 0,
  }),
  getters: {
    getBag(state) {
      return state.bag;
    },
    getBagAmount(state) {
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
    },
    setSameProductToBag(product: TBagItem) {
      const sameProduct = findSameInBag(product, this.bag) as number;
      const newBag = [...this.bag];
      newBag[sameProduct].quantity += 1;

      this.$patch({
        bag: newBag,
        amount: this.amount + 1,
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
    },
  },
});
