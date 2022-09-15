import type { TBagItem } from "@/types/types";
import { defineStore } from "pinia";
import type { TBagState } from "./types";

export const useBagStore = defineStore({
    id: "bag",
    state: (): TBagState => ({
        bag: [],
        amount: 0
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
                return acc += +item.price * item.quantity;
            }, 0);

            return total;
        }
    },
    actions: {
        setProductToBag(product: TBagItem) {
            this.$patch({
                bag: [...this.bag, product],
                amount: this.amount + 1
            });
        },
        removeProductFromBag(productId: string) {
            const filteredBag = this.bag.filter(item => item.id !== productId);
            this.$patch({
                bag: filteredBag,
                amount: this.amount + 1
            });
        }
    }
})