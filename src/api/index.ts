import axios from "axios";
import type { TDataPost } from "./types";

const BASE_URL = import.meta.env.VITE_BASE_API;

export const fetchRequest = (
  url: string,
  params: { [key: string | number]: any }
) => {
  return axios
    .create({
      headers: {
        "Content-type": "application/json",
      },
    })
    .get(`${BASE_URL}${url}`, {
      params: {
        ...params,
      },
    });
};

export const postRequest = (url: string, data: TDataPost) => {
  return axios
    .create({
      headers: {
        "Content-type": "application/json",
      },
    })
    .post(`${BASE_URL}${url}`, data);
};
