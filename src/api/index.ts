import axios from 'axios';
import type { TDataPost } from './types';

const baseUrl = 'https://modnikky-api.herokuapp.com/api/';

export const fetchRequest = (
    url: string, 
    params: {[key: string | number]: any}
) => {
    return axios
        .create({
            headers: {
                'Content-type': 'application/json',
            },
        })
        .get(`${baseUrl}${url}`, {
            params: {
                ...params,
            },
        });
};

export const postRequest = (
    url: string, 
    data: TDataPost
) => {
    return axios
        .create({
            headers: {
                'Content-type': 'application/json',
            },
        })
        .post(`${baseUrl}${url}`, data);
};
