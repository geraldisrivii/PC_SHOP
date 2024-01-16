
import { IGrouppedProduct, IProduct } from '@/types/Product'
import { ComputedRef, Ref, WritableComputedRef } from 'vue'

export const getMaxQuantityOfProduct = (basketItems: Ref<Array<IGrouppedProduct>> | ComputedRef<Array<IGrouppedProduct>>, product: IGrouppedProduct): number => {
    const quantityWithSameID = basketItems.value.filter(item => item.id == product.id).length

    let minQuantityChild: IProduct = product.grouped_products[0]

    product.grouped_products.forEach(item => {
        if (item.stock_quantity < minQuantityChild.stock_quantity) {
            minQuantityChild = item
        }
    })

    let quantityOfChild = product.grouped_products.filter(item => item.id == minQuantityChild.id).length

    return minQuantityChild.stock_quantity / quantityOfChild
}