import WOO from '@/axiosWoocomerce'
import { IProduct } from '@/types/Product';

export const getProducts = async (per_page: number, category_id: number) => {
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
                category: category_id,
                page: page
            }
        });
        if (page > Number(fetchedProducts.headers['x-wp-totalpages'])) {
            break;
        }

        products.push(...fetchedProducts.data)
    }
    return products;
}