import Store from '@/store';
import { WritableComputedRef, computed } from 'vue';
import { Mutations } from '@/store/basket';
import { IGrouppedProduct } from '@/types/Product';
import { Getters } from '@/store/basket/types';

export const useBasketItems = (store: typeof Store, product: WritableComputedRef<IGrouppedProduct>) => {
    
    let basketItems: WritableComputedRef<Array<IGrouppedProduct>> = computed({
        get: () => store.getters['basket/' + Getters.GET_BASKET_ITEMS],
        set: (value: Array<IGrouppedProduct>) => store.commit('basket/' + Mutations.SET_BASKET_ELEMENTS, value),
    })

    const addToCart = () => {
        basketItems.value.push(product.value)
    }
    
    const removeOfCart = () => {
        const index = basketItems.value.findIndex(item => item.id == product.value.id)
    
        if (index < 0) {
            return
        }
    
        basketItems.value.splice(index, 1)
    }
    

    return {
        basketItems,
        addToCart,
        removeOfCart
    }

}