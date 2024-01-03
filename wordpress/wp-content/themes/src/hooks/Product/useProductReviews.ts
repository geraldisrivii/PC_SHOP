import { Ref, ref, watch } from 'vue';
import { Resolutions } from '@/types/Stats';
import WOO from '@/axiosWoocomerce'
import { IGrouppedProduct, IProductReview } from '@/types/Product';

export const useProductReviews = (product: Ref<IGrouppedProduct>) => {

    const reviews: Ref<Array<IProductReview>> = ref([])

    const getProductReviews = async () => {
        reviews.value = (await WOO.get('products/reviews', {
            params: {
                product: product.value.id
            }
        })).data
    }

    watch(product, () => getProductReviews())

    return {
        reviews,
        onMountedAction: getProductReviews
    }
}