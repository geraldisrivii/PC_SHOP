<template>
    <div v-show="hasQuantity" class="cart-button-buttons">
        <button class="cart-button-buttons__button" @click="removeOfCart">
            <img :src="app['general_slider-button_left']" alt="button_left">
        </button>
        <p class="cart-button-buttons__quantity">{{ quantity }}</p>
        <button class="cart-button-buttons__button " @click="addToCart">
            <img :src="app['general_slider-button_right']" alt="button_right">
        </button>
    </div>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useBasketItems } from '@/hooks/Product/useBasketItems';
import { useBasketItemsGrouped } from '@/hooks/Product/useBasketItemsGrouped';
import { useVuex } from '@/store/useVuex';
import { IGrouppedProduct } from '@/types/Product';
import { computed } from 'vue';


interface Props {
    product: IGrouppedProduct
}

const { product } = defineProps<Props>()

const store = useVuex()

const { basketItems, addToCart, removeOfCart } = useBasketItems(store, product)

const { BasketItemsGrouped, quantity } = useBasketItemsGrouped(store, product)


const { app } = useAppSettings(store)

const hasQuantity = computed(() => {
    return quantity.value > 0
})


</script>

<style lang="scss" scoped></style>