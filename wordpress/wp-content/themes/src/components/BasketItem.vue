<template>
    <div class="basket-item">
        <img v-if="product.images.length > 0" class="basket-item__image" :src="product.images[0].src" :alt="product.name">
        <div class="basket-item-content">
            <div class="basket-item-content__description">
                <p class="basket-item-content__title">{{ product.name }}</p>
                <p class="basket-item-content__price">{{ product.price }} руб / шт</p>
            </div>
            <div class="basket-item-content__quantity-box">
                <p class="basket-item-content__sum">Итого: {{ Number(product.price) * quantity }} руб</p>
                <CartButtonsQuantity :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useVuex } from '@/store/useVuex';
import CartButtonsQuantity from './CartButtonsQuantity.vue';
import { IGrouppedProduct } from '@/types/Product';
import { checkMaxQuantityOfProduct } from '@/helpers/checkMaxQuantityOfProduct';
import { onMounted, toRefs, watch } from 'vue';
import { useBasketItemsGrouped } from '@/hooks/Product/useBasketItemsGrouped';
import { useBasketItems } from '@/hooks/Product/useBasketItems';
import { getMaxQuantityOfProduct } from '@/helpers/getMaxQuantityOfProduct';

interface Props {
    product: IGrouppedProduct
    quantity: number
}
const store = useVuex()

const props = defineProps<Props>()

const { product } = toRefs(props)



const { app } = useAppSettings(store)

</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.basket-item {
    display: flex;
    align-items: center;

    @include min-table {
        flex-direction: column;
    }

    gap: 30px;
    width: 100%;
    padding: 17px 34px;
    background-color: #1C1C1C;

    &__image {
        width: 120px;
        height: 120px;
        object-fit: contain;
    }
}

.basket-item-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include phone {
        flex-direction: column;
        gap: 20px;
        text-align: center;
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