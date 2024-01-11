import WOO from '@/axiosWoocomerce'

export const getCategories = async (params: object) => {
    let response = await WOO.get('/products/categories', {params: params});

    return response.data;
}