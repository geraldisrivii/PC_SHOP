

export const useCartButtonsActions = () => {
    const addToCart = () => {
        basketItems.value.push(product.value)

        console.log(BasketItemsGrouped.value)
    }

    const removeOfCart = () => {
        const index = basketItems.value.findIndex(item => item.id == product.value.id)

        if (index < 0) {
            return
        }

        basketItems.value.splice(index, 1)
    }
}