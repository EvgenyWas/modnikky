import type { TBag, TProduct } from "@/types/types"

export type TProductsState = {
    products: TProduct[]
}

export type TSortingOptionsState = {
    search: string,
    selectedCategory: string
}

export type TBagState = {
    bag: TBag,
    amount: number
}

export type TWishlist = TProduct[]

export type TWishlistState = {
    wishlist: TWishlist
}