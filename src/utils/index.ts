import { COOKIES, DEFAULT_CURRENCY, type SORTING_OPTIONS } from "@/config";
import router from "@/router";
import type { TWishlist } from "@/stores/types";
import type { TCookieOptions, TBag, TBagItem, TProduct } from "@/types/types";

// Function to validate an email
export function validateEmail(email: string): RegExpMatchArray | null {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// Function to validate a password
export function validatePassword(password: string): RegExpMatchArray | null {
  return String(password).match(
    /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\#\$\.\%\&\*])(?=.*[a-zA-Z]).{8,16}$/
  );
}

// Function to find the same product in the wishlist
export function findSameInWishlist(product: TProduct, wishlist: TWishlist) {
  const sameProduct = wishlist.find((item) => item.id === product.id);

  return sameProduct;
}

// Function to find the same product in the bag
export function findSameInBag(product: TBagItem, bag: TBag) {
  const sameProduct = bag.findIndex((item) => {
    const conditionSameId = item.id === product.id;
    const conditionSameSelectedSize =
      item.selectedSize === product.selectedSize;

    if (conditionSameId && conditionSameSelectedSize) {
      return true;
    } else {
      return false;
    }
  });

  if (sameProduct === -1) {
    return false;
  } else {
    return sameProduct;
  }
}

// Function to convert a product to a bag item
export function convertToBagItem(
  product: TProduct,
  selectedSize: string
): TBagItem {
  const bagItem: TBagItem &
    Partial<Pick<TProduct, "availableSizes" | "description">> = {
    ...product,
    selectedSize: selectedSize,
    quantity: 1,
  };
  delete bagItem.availableSizes;
  delete bagItem.description;

  return bagItem;
}

// Function for formatting of available sizes from server
export function formatAvailableSizes(products: TProduct[]): TProduct[] {
  const formattedProducts = products.map((product) => {
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
  const searchParams = Object.fromEntries(
    new URL(window.location as any).searchParams.entries()
  );

  return searchParams;
}

// Function to push params to current history
export async function pushParamsToWindowHistory(
  option: SORTING_OPTIONS,
  value: string
) {
  const { pathname, search } = window.location;
  const searchParams = getWindowSearchParams();
  const searchParamsLength = Object.keys(searchParams).length;
  let correctUrl;

  switch (true) {
    case !searchParamsLength && value !== "":
      correctUrl = `${pathname}?${option}=${value}`;
      break;
    case value === "":
      correctUrl = `${pathname}?`;
      for (let key in searchParams) {
        correctUrl += key === option ? "" : `${key}=${searchParams[key]}&`;
      }
      correctUrl = correctUrl.slice(0, -1);
      break;
    case searchParamsLength >= 1 && !searchParams.hasOwnProperty(option):
      correctUrl = `${pathname + search}&${option}=${value}`;
      break;
    default:
      correctUrl = `${pathname}?`;
      for (let key in searchParams) {
        correctUrl +=
          key === option
            ? `${option}=${value}&`
            : `${key}=${searchParams[key]}&`;
      }
      correctUrl = correctUrl.slice(0, -1);
  }

  await router.push(correctUrl);
  window.history.replaceState({ ...history.state }, "");
}

// Function to filter products by a string
export function filterProducts(products: TProduct[], str: string) {
  const strArray = [...str];
  const filteredProducts = products.filter(({ name, description }) => {
    const productDataArray = [
      ...name.toLowerCase(),
      ...description.toLowerCase(),
    ];
    return strArray.every((letter) => {
      const hasLetter = productDataArray.includes(letter);
      productDataArray.splice(productDataArray.indexOf(letter), 1);
      return hasLetter;
    });
  });

  return filteredProducts;
}

// Function to get a correct string with an amount and item word
export function getCorrectItemsAmountString(itemsAmount: number): string {
  const correctEnding = itemsAmount === 1 ? "item" : "items";
  const correctString = `${itemsAmount} ${correctEnding}`;
  return correctString;
}

// Function to get around price with currency
export function getFormattedPrice(
  price: number | string,
  currency: string = DEFAULT_CURRENCY
): string {
  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 2,
  });
  const formattedPrice = numberFormat.format(Number(price));
  return formattedPrice;
}

export function getCookie(name: COOKIES): string | undefined {
  let cookie = "";
  try {
    cookie = document.cookie;
  } catch (error) {
    console.log(error);
  }

  const matches = cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(
  name: COOKIES,
  value: string | number,
  options: TCookieOptions = {}
): void {
  const cookieOptions: TCookieOptions = {
    path: "/",
    ...options,
  };

  if (options?.expires instanceof Date) {
    cookieOptions.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in cookieOptions) {
    let optionValue = cookieOptions[optionKey as keyof TCookieOptions];
    if (!optionValue) continue;

    updatedCookie +=
      optionValue !== true
        ? "; " + optionKey + "=" + optionValue
        : "; " + optionKey;
  }

  try {
    document.cookie = updatedCookie;
  } catch (error) {
    console.log(error);
  }
}

export function deleteCookie(name: COOKIES) {
  setCookie(name, "", {
    "max-age": -1,
  });
}

// Function to get future date in certain days
export function getFutureDateInDays(days: number) {
  const millisecondsInDay = 86400e3;
  const futureDate = new Date(Date.now() + millisecondsInDay * days);
  return futureDate;
}

export function getbagProductIdsToArray(products: TBag): string[] {
  return products.map((product) => product.id);
}
