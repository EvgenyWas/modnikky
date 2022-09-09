export type TCartPost = {
    products: string[]
}

export type TSubscriptionPost = {
    email: string
}

export type TDataPost = TCartPost | TSubscriptionPost;

export type TParams = {
    [key: string]: string | number
}