import { Ref, computed, ref } from 'vue';
import WOO from '@/axiosWoocomerce'
import { IProduct } from '@/types/Product';

export const useSameProducts = (currentProduct: IProduct) => {

    const sameProducts = ref([]);

    const sameProductsLoaded = ref(false)

    const onMountedAction = async () => {
        for (const series of currentProduct.taxonomies.series) {
            sameProducts.value.push(...(await WOO.get('products', {
                params: { series: series.slug, exclude: currentProduct.id }
            })).data)
        }

        sameProductsLoaded.value = true
    }

    return {
        sameProducts,
        sameProductsLoaded,
        onMountedAction
    }
}