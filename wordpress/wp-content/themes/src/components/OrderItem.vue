<template>
    <div class="order-item">
        <img v-if="product.images && product.images.length > 0" class="order-item__image" :src="product.images[0].src" :alt="product.name">
        <div class="order-item-content">
            <div class="order-item-content__description">
                <p class="order-item-content__title">{{ product.name }}</p>
                <p class="order-item-content__quantity">{{ basketItem.quantity }}  шт</p>
            </div>
            <div class="order-item-content__quantity-box">
                <p class="order-item-content__sum">Итого: {{ Number(product.price) * basketItem.quantity }} руб</p>
                <p class="order-item-content__price">{{ product.price }} руб / шт</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useVuex } from '@/store/useVuex';
import CartButtonsQuantity from './CartButtonsQuantity.vue';
import { IGrouppedProduct } from '@/types/Product';
import { BasketItem } from '@/types/Basket';

interface Props {
    basketItem: BasketItem
}

const { basketItem } = defineProps<Props>()

const product = basketItem.product;

const store = useVuex()

const { app } = useAppSettings(store)

</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';
.order-item {
    display: flex;
    align-items: center;
    gap: 30px;
    width: 100%;
    padding: 12px 34px;
    background-color: #1C1C1C;

    @include min-table{
        flex-direction: column;
    }

    &__image {
        width: 120px;
        height: 120px;
        object-fit: contain;
    }
}

.order-item-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include phone{
        text-align: center;
        gap: 20px;
        flex-direction: column;
    }

    width: 100%;

    &__description {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__title {
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 500;
    }

    &__price {}

    &__quantity-box {
        display: flex;
        flex-direction: column;
        gap: 13px;
    }

    &__sum {
        font-weight: 500;
    }
}
</style>