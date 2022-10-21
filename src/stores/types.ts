import type { TBag, TProduct } from "@/types/types"

export type TProductsState = {
    products: TProduct[]
}

export type TSortingOptionsState = {
    search: string,
    isSearchActive: boolean,
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