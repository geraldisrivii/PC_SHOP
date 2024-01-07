<template>
    <div class="basket-item">
        <img class="basket-item__image" :src="imageSrc" :alt="title">
        <div class="basket-item-content">
            <div class="basket-item-content__description">
                <p class="basket-item-content__title">{{ title }}</p>
                <p class="basket-item-content__price">{{ price }}</p>
            </div>
            <div class="basket-item-content__quantity-box">
                <p class="basket-item-content__sum"></p>
                <div class="cart-button-buttons">
                    <button class="cart-button-buttons__button" @click="removeOfCart">
                        <img :src="app['general_slider-button_left']" alt="button_left">
                    </button>
                    <p class="cart-button-buttons__quantity">{{ quantity }}</p>
                    <button class="cart-button-buttons__button " @click="addToCart">
                        <img :src="app['general_slider-button_right']" alt="button_right">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useVuex } from '@/store/useVuex';

interface Props {
    imageSrc: string;
    title: string;
    quantity: number;
    price: number;
}

const { imageSrc, title, quantity, price } = defineProps<Props>()

const store = useVuex()

const { app } = useAppSettings(store)

</script>

<style lang="scss" scoped></style>