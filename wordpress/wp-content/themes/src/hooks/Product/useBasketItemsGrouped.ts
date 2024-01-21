import Store from '@/store';
import { WritableComputedRef, computed } from 'vue';
import { Mutations } from '@/store/basket';
import { IGrouppedProduct } from '@/types/Product';
import { Getters } from '@/store/basket/types';
import { BasketItem } from '@/types/Basket';

export const useBasketItemsGrouped = (store: typeof Store) => {

    const BasketItemsGrouped: WritableComputedRef<Array<BasketItem>> = computed(() =>
        store.getters['basket/' + Getters.GET_BASKET_ITEMS_GROUPED])

    return {
        BasketItemsGrouped,
    }

}