import { checkMaxQuantityOfProduct } from '@/helpers/checkMaxQuantityOfProduct'
import { IGrouppedProduct, IProduct } from '@/types/Product'
import { ComputedRef, Ref, WritableComputedRef } from 'vue'

export const useCartButtonsActions = (basketItems: WritableComputedRef<Array<IGrouppedProduct>>) => {

    const addToCart = (product: IGrouppedProduct) => {
        if(checkMaxQuantityOfProduct(basketItems, product)){
            basketItems.value.push(product)
        }
    }

    const removeOfCart = (product: IGrouppedProduct) => {
        const index = basketItems.value.findIndex(item => item.id == product.id)

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