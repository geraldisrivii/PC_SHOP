import WOO from '@/axiosWoocomerce'
import { IProduct } from '@/types/Product';
import { AxiosRequestConfig } from 'axios';

export const getProducts = async (params?: object) => {
    let { data } = await WOO.get('products', {
        params: params ? params : {}
    });

    return data
}