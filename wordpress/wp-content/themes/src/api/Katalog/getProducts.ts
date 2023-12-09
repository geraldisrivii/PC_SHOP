import WOO from '@/axiosWoocomerce'
import { IProduct } from '@/types/Product';
import { AxiosRequestConfig } from 'axios';

export interface IParams {
    cpu_socket?: Array<string>;
    category?: number;
    cpu_producer?: string;
    cpu_model?: number;
    gpu_model?: number;
    gpu_producer?: string;
    [key: string]: any;
}


export const getProducts = async (per_page: number, category_id?: number, params?: IParams) => {
    let products = []
    let page = 0;
    while (true) {
        page++;

        if (products.length >= per_page) {
            break
        }
        let fetchedProducts = await WOO.get('products', {
            params: {
                per_page: per_page,
                category: category_id ?? null,
                page: page,
                ...params
            }
        });
        if (page > Number(fetchedProducts.headers['x-wp-totalpages'])) {
            break;
        }

        products.push(...fetchedProducts.data)
    }
    return products;
}