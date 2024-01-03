import { Ref, WritableComputedRef, computed, ref } from 'vue';
import WOO from '@/axiosWoocomerce'
import { IProduct, IGrouppedProduct } from '@/types/Product';
import { Mutations } from '@/store/products/index';
import store from '@/store';
import { Settings } from '@/types/App';
import { useStore } from 'vuex';

export const useCurrentProduct = () => {


    let product: WritableComputedRef<IGrouppedProduct> = computed({
        get: () => store.state.products.product,
        set: (value: IGrouppedProduct) => store.commit(Mutations.SET_CURRENT_PRODUCT, value),
    })

    return {
        product
    }
}