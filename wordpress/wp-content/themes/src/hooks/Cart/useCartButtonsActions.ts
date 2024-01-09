import { IGrouppedProduct } from '@/types/Product'
import { ComputedRef, WritableComputedRef } from 'vue'

export const useCartButtonsActions = (basketItems: WritableComputedRef<Array<IGrouppedProduct>>, product: WritableComputedRef<IGrouppedProduct>) => {

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
        addToCart,
        removeOfCart
    }
}