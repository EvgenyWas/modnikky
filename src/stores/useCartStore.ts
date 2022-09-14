import type { TCartItem } from "@/types/types";
import { defineStore } from "pinia";
import type { TCartState } from "./types";

export const useCartStore = defineStore({
    id: "cart",
    state: (): TCartState => ({
        cart: [],
        amount: 0
    }),
    getters: {
        getCart(state) {
            return state.cart;
        },
        getCartAmount(state) {
            return state.amount;
        },
        getCartTotal(state) {
            const total = state.cart.reduce((acc, item) => {
                return acc += +item.price * item.quantity;
            }, 0);

            return total;
        }
    },
    actions: {
        setProductToCart(product: TCartItem) {
            this.$patch({
                cart: [...this.cart, product],
                amount: this.amount + 1
            });
        },
        removeProductFromCart(productId: string) {
            const filteredCart = this.cart.filter(item => item.id !== productId);
            this.$patch({
                cart: filteredCart,
                amount: this.amount + 1
            });
        }
    }
})