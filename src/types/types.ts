export type TPrice = {
  currency: string;
  value: string;
};

export type TColor = {
  name: string;
  hex: string;
};

export type TProduct = {
  id: string;
  type: string;
  name: string;
  price: TPrice;
  color: TColor;
  availableSizes: string[];
  description: string;
  images: string[];
};

export type TBagItem = {
  id: string;
  type: string;
  name: string;
  price: TPrice;
  color: TColor;
  selectedSize: string;
  images: string[];
  quantity: number;
};

export type TBag = TBagItem[];

export type CookieOptions = {
  path?: string;
  domain?: string;
  expires?: Date | string;
  ["max-age"]?: number;
  secure?: boolean;
  samesite?: boolean | 'lax';
  httpOnly?: boolean;
}
