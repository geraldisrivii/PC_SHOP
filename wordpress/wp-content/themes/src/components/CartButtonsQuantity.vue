<template>
    <div v-show="hasQuantity" class="cart-button-buttons">
        <button class="cart-button-buttons__button" @click="removeOfCart(currentProduct)">
            <img :src="app['general_slider-button_left']" alt="button_left">
        </button>
        <p class="cart-button-buttons__quantity">{{ quantity }}</p>
        <button :disabled="!checkMaxQuantityOfProduct(toRef(basketItems), currentProduct)" class="cart-button-buttons__button " @click="addToCart(currentProduct)">
            <img :src="app['general_slider-button_right']" alt="button_right">
        </button>
    </div>
</template>

<script setup lang="ts">
import { checkMaxQuantityOfProduct } from '@/helpers/checkMaxQuantityOfProduct';
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useCartButtonsActions } from '@/hooks/Cart/useCartButtonsActions';
import { useBasketItems } from '@/hooks/Product/useBasketItems';
import { useBasketItemsGrouped } from '@/hooks/Product/useBasketItemsGrouped';
import { useCurrentProduct } from '@/hooks/Product/useCurrentProduct';
import { useVuex } from '@/store/useVuex';
import { IGrouppedProduct } from '@/types/Product';
import { WritableComputedRef, computed, toRef } from 'vue';


interface Props {
    product?: IGrouppedProduct
}

const { product } = defineProps<Props>()

const currentProduct = computed((): IGrouppedProduct => {
    if(!product){
        return useCurrentProduct().product.value
    }
    return product
})


const store = useVuex()

const { basketItems } = useBasketItems(store)

const { addToCart, removeOfCart } = useCartButtonsActions(basketItems)

const { BasketItemsGrouped } = useBasketItemsGrouped(store)


const { app } = useAppSettings(store)

const quantity = computed(() => {
    const basketItem = BasketItemsGrouped.value.find(item => item.product.id == currentProduct.value.id)

    if (!basketItem) {
        return 0
    }

    return basketItem.quantity
})

const hasQuantity = computed(() => {
    return quantity.value > 0
})


</script>

<style lang="scss" scoped>
.cart-button-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: rgb(43, 43, 43);
    border-radius: 5px;

    padding: 13px 34px;

    &__button {}


    &__quantity {}
}
</style>