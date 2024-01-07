import Store from '@/store';
import { WritableComputedRef, computed } from 'vue';
import { Mutations } from '@/store/basket';
import { IGrouppedProduct } from '@/types/Product';
import { Getters } from '@/store/basket/types';
import { BasketItem } from '@/types/Basket';

export const useBasketItemsGrouped = (store: typeof Store, product: WritableComputedRef<IGrouppedProduct>) => {

    const BasketItemsGrouped: WritableComputedRef<Array<BasketItem>> = computed(() =>
        store.getters['basket/' + Getters.GET_BASKET_ITEMS_GROUPED])

    const quantity = computed(() => {
        const basketItem = BasketItemsGrouped.value.find(item => item.product.id == product.value.id)

        if (!basketItem) {
            return 0
        }

        return basketItem.quantity
    })

    return {
        BasketItemsGrouped,
        quantity
    }

}