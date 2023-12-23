import WOO from '@/axiosWoocomerce'
import { IProduct } from '@/types/Product';
import { AxiosRequestConfig } from 'axios';

export interface IParams {
    cpu_socket?: Array<string>;
    cpu_producer?: Array<string>;
    cpu_model?: Array<number>;
    gpu_model?: Array<number>;
    gpu_producer?: Array<string>;
    [key: string]: any;
}


export const getProducts = async (per_page: number, category_id?: number, params?: IParams) => {
    let { data } = await WOO.get('products', {
        params: {
            per_page: per_page,
            category: category_id ?? null,
            ...params
        }
    });

    return data
}