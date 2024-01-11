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


export const getProducts = async (params?: IParams) => {
    let { data } = await WOO.get('products', {
        params: {
            ...params
        }
    });

    return data
}