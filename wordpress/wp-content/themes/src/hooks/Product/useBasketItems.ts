import Store from '@/store';
import { WritableComputedRef, computed } from 'vue';
import { Mutations } from '@/store/basket';
import { IGrouppedProduct } from '@/types/Product';
import { Getters } from '@/store/basket/types';

export const useBasketItems = (store: typeof Store) => {
    
    let basketItems: WritableComputedRef<Array<IGrouppedProduct>> = computed({
        get: () => store.getters['basket/' + Getters.GET_BASKET_ITEMS],
        set: (value: Array<IGrouppedProduct>) => store.commit('basket/' + Mutations.SET_BASKET_ELEMENTS, value),
    })


    return {
        basketItems
    }

}