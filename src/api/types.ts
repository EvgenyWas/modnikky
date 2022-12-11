import type { AxiosResponse } from "axios";

export type TCartPost = {
  products: string[];
};

export type TSubscriptionPost = {
  email: string;
};

export type TDataPost = TCartPost | TSubscriptionPost;

export type TParams = {
  [key: string]: string | number;
};

export type TResponse = {
  data: any;
};

export type TResponsePostRequests = Promise<AxiosResponse<{ message: string }>>;

export type TUseApi = (data?: any) => any | TResponsePostRequests;
