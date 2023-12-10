import Store, { Mutations } from '@/store';
import { Ref, WritableComputedRef, computed, ref } from 'vue';
import { ICategoryMainPage, Settings } from '@/types/App';

import WOO from '@/axiosWoocomerce'

export const useAppCategories = (categoriesParam: Array<ICategoryMainPage>) => {

    const categories: Ref<Array<ICategoryMainPage>> = ref(categoriesParam);

    const getCategoryPrice = async (category: ICategoryMainPage) => {
        let data: { price: string } = await WOO.get('products', {
            params: {
                category: category.product_cat[0].term_id,
                orderby: 'price',
                order: 'asc',
                per_page: 1
            }
        }).then(response => response.data[0]);

        if (data) {
            return data.price;
        }

        return 0;
    };

    return {
        categories,
        getCategoryPrice
    }
}