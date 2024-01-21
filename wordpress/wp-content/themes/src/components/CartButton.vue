<template>
    <div class="cart-button">
        <CartButtonsQuantity v-show="hasQuantity" />
        <button :disabled="!checkMaxQuantityOfProduct(toRef(basketItems), product)" v-show="!hasQuantity" @click="addToCart(product)"
            class="button cart-button__button">{{ page['first-section_button-text'] }}</button>
    </div>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { usePageSettings } from '@/hooks/App/usePageSettings';
import { useBasketItems } from '@/hooks/Product/useBasketItems';
import { useBasketItemsGrouped } from '@/hooks/Product/useBasketItemsGrouped';
import { useCurrentProduct } from '@/hooks/Product/useCurrentProduct';
import { useVuex } from '@/store/useVuex';
import { computed, onMounted, toRef } from 'vue';
import CartButtonsQuantity from './CartButtonsQuantity.vue';
import { useCartButtonsActions } from '@/hooks/Cart/useCartButtonsActions';
import { checkMaxQuantityOfProduct } from '@/helpers/checkMaxQuantityOfProduct';
import { useStoreUser } from '@/hooks/User/useStoreUser';

const store = useVuex()

const { page } = usePageSettings(store)

const { product } = useCurrentProduct()

const { BasketItemsGrouped } = useBasketItemsGrouped(store)

const { basketItems } = useBasketItems(store)

const { addToCart } = useCartButtonsActions(basketItems)

const { app } = useAppSettings(store)

const hasQuantity = computed(() => {
    return quantity.value > 0
})


const quantity = computed(() => {

    const basketItem = BasketItemsGrouped.value.find(item => item.product.id == product.value.id)
    
    if (!basketItem) {
        return 0
    }

    return basketItem.quantity
})



onMounted(() => {
    checkMaxQuantityOfProduct(toRef(basketItems), product.value)
})

</script>

<style lang="scss" scoped></style>