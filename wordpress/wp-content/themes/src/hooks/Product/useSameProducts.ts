import { Ref, computed, ref, watch } from 'vue';
import WOO from '@/axiosWoocomerce'
import { IProduct } from '@/types/Product';

export const useSameProducts = (currentProduct: Ref<IProduct>) => {

    const sameProducts = ref([]);

    const sameProductsLoaded = ref(false)

    const getSameProducts = async () => {
        sameProducts.value = []
        sameProductsLoaded.value = false

        for (const series of currentProduct.value.taxonomies.series) {
            sameProducts.value.push(...(await WOO.get('products', {
                params: { series: series.slug, exclude: currentProduct.value.id }
            })).data)
        }

        sameProductsLoaded.value = true
    }

    watch(currentProduct, () => getSameProducts())

    return {
        sameProducts,
        sameProductsLoaded,
        onMountedAction: getSameProducts
    }
}