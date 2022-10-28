import type { ESortingOptions } from "@/config";
import router from "@/router";
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

// Function to get window dimensions
export function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;

    return { width, height };
}

// Function to get serch params from current window location
export function getWindowSearchParams(): { [key: string]: string } {
    const searchParams = Object.fromEntries(new URL(window.location as any).searchParams.entries());

    return searchParams;
}

// Function to push params to current history
export async function pushParamsToWindowHistory(option: ESortingOptions, value: string) {
    const { pathname, search } = window.location;
    const searchParams = getWindowSearchParams();
    const searchParamsLength = Object.keys(searchParams).length;
    let correctUrl;

    switch (true) {
        case !searchParamsLength && value !== '':
            correctUrl = `${pathname}?${option}=${value}`;
            break;
        case value === '':
            correctUrl = `${pathname}?`;
            for (let key in searchParams) {
                correctUrl += key === option ? '' : `${key}=${searchParams[key]}&`
            };
            correctUrl = correctUrl.slice(0, -1);
            break;
        case searchParamsLength >= 1 && !searchParams.hasOwnProperty(option):
            correctUrl = `${pathname + search}&${option}=${value}`;
            break;
        default:
            correctUrl = `${pathname}?`;
            for (let key in searchParams) {
                correctUrl += key === option ? `${option}=${value}&` : `${key}=${searchParams[key]}&`
            };
            correctUrl = correctUrl.slice(0, -1);
    };

    await router.push(correctUrl);
    window.history.replaceState({ ...history.state }, '');
}

// Function to filter products by a string
export function filterProducts(products: TProduct[], str: string) {
    const filteredProducts = products.filter(({ type, name, description }) =>
        [...str].every(letter =>
            [...type.toLowerCase(), ...name.toLowerCase(), ...description.toLowerCase()].includes(letter)
        )
    );

    return filteredProducts;
}

// Function to get a correct string with an amount and item word 
export function getCorrectItemsAmountString(itemsAmount: number): string {
    const correctEnding = itemsAmount === 1 ? "item" : "items";
    const correctString = `${itemsAmount} ${correctEnding}`;
    return correctString;
}

// Function to get around price with currency
export function getFormattedPrice(price: number | string, currency: string): string {
    const numberFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: 2,
    });
    const formattedPrice = numberFormat.format(Number(price));
    return formattedPrice;
}
