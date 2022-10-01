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
    const sameProduct = bag.findIndex(item => {
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

    if (sameProduct === -1) {
        return false;
    } else {
        return sameProduct;
    };
}

// Function to convert a product to a bag item
export function convertToBagItem(
    product: TProduct, 
    selectedSize: string
): TBagItem {
    const bagItem: TBagItem & 
    Partial<Pick<TProduct, 'availableSizes' | 'description'>> = {
        ...product,
        selectedSize: selectedSize,
        quantity: 1
    };
    delete bagItem.availableSizes;
    delete bagItem.description;

    return bagItem;
}

// Function for formatting of available sizes from server
export function formatAvailableSizes(products: TProduct[]): TProduct[] {
    const formattedProducts = products.map(product =>{ 
        product.availableSizes = product.availableSizes[0].split(", ");
        return product;
    });
    
    return formattedProducts;
}

// Function for getting a word from capital letter
export function capitalizeWord(word: string) {
    return word[0].toUpperCase() + word.slice(1);
}