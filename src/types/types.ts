export type TPrice = {
    currency: string,
    value: string
}

export type TColor = {
    name: string,
    hex: string
}

export type TProduct = {
    id: string,
    type: string,
    name: string,
    price: TPrice,
    color: TColor,
    availableSizes: string[],
    description: string,
    images: string[]
}

export type TCartItem = {
    id: string,
    type: string,
    name: string,
    price: TPrice,
    color: TColor,
    selectedSize: string,
    image: string,
    quantity: number
}

export type TCart = TCartItem[];