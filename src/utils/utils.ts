import type { TWishlist } from "@/stores/types";
import type { TBag, TBagItem, TProduct } from "@/types/types";

// Function for email validate
export function validateEmail(email: string) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}

// Function to find the same product in the wishlist
export function findSameInWishlist(
    product: TProduct,
    wishlist: TWishlist
) {
    const sameProduct = wishlist.find(item => item.id === product.id);

    return sameProduct;
}

// Function to find the same product in the bag
export function findSameInBag(
    product: TBagItem,
    bag: TBag
) {
    const sameProduct = bag.find(item => {
        const conditionSameId = item.id === product.id;
        const conditionSameSelectedSize = item.selectedSize === product.selectedSize;

        if (
            conditionSameId &&
            conditionSameSelectedSize
        ) {
            return true;
        } else {
            return false;
        }
    });

    return sameProduct;
}