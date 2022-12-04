// Default values
export const CATEGORIES = [
  "dresses",
  "tees",
  "swimwear",
  "denim",
  "tops",
  "beauty",
];
export const PAGINATION_CATEGORY_PRODUCTS = 4;
export const DEFAULT_CURRENCY = "USD";

// Expirations
export const SUBSCRIPTION_EXPIRATION_DAYS = 30;
export const AUTHORIZED_EXPIRATION_DAYS = 30;

// Enums
export enum SORTING_OPTIONS {
  SEARCH = "search",
  CATEGORY = "category",
}
export enum STORAGE_KEYS {
  BAG = "bag",
  WISH_LIST = "wishlist",
  AUTH = "auth",
}
export enum COOKIES {
  SUBSCRIPTION = "subscribed",
  AUTHORIZED = "authorized",
}
