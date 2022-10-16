import type { TBagItem } from "@/types/types";
import { findSameInBag } from "@/utils/utils";
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
                return acc += Number(item.price.value) * item.quantity;
            }, 0);

            return total.toFixed(2);
        }
    },
    actions: {
        setProductToBag(product: TBagItem) {
            this.$patch({
                bag: [...this.bag, product],
                amount: this.amount + 1
            });
        },
        setSameProductToBag(product: TBagItem) {
            const sameProduct = findSameInBag(product, this.bag) as number;
            const newBag = [...this.bag];
            newBag[sameProduct].quantity += 1;

            this.$patch({
                bag: newBag,
                amount: this.amount + 1
            })
        },
        removeProductFromBag(productId: string) {
            const filteredBag = this.bag.filter(item => item.id !== productId);
            this.$patch({
                bag: filteredBag,
                amount: this.amount - 1
            });
        }
    }
})