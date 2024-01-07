<template>
    <div class="cart-button">
        <div v-show="hasQuantity" class="cart-button-buttons">
            <button class="cart-button-buttons__button" @click="removeOfCart">
                <img :src="app['general_slider-button_left']" alt="button_left">
            </button>
            <p class="cart-button-buttons__quantity">{{ quantity }}</p>
            <button class="cart-button-buttons__button " @click="addToCart">
                <img :src="app['general_slider-button_right']" alt="button_right">
            </button>
        </div>
        <button v-show="!hasQuantity" @click="addToCart()" class="button cart-button__button">{{
                page['first-section_button-text']
            }}</button>
    </div>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { usePageSettings } from '@/hooks/App/usePageSettings';
import { useBasketItems } from '@/hooks/Product/useBasketItems';
import { useBasketItemsGrouped } from '@/hooks/Product/useBasketItemsGrouped';
import { useCurrentProduct } from '@/hooks/Product/useCurrentProduct';
import { Mutations } from '@/store/basket';
import { useVuex } from '@/store/useVuex';
import { computed } from 'vue';

const store = useVuex()

const { page } = usePageSettings(store)

const { product } = useCurrentProduct()

const { BasketItemsGrouped, quantity } = useBasketItemsGrouped(store, product)

const { basketItems, addToCart, removeOfCart } = useBasketItems(store, product)

const { app } = useAppSettings(store)

const hasQuantity = computed(() => {
    return quantity.value > 0
})


</script>

<style lang="scss" scoped>



.cart-button-buttons {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: rgb(43, 43, 43);
    border-radius: 5px;

    padding: 13px 34px;

    &__button {}


    &__quantity {}
}
</style>