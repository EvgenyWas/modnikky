import type { TCart, TProduct } from "@/types/types"

export type TProductsState = {
    products: TProduct[]
}

export type TSortingOptionsState = {
    search: string,
    selectedCategory: string
}

export type TCartState = {
    cart: TCart,
    amount: number
}

export type TWishlistState = {
    wishlist: TProduct[]
}