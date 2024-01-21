<template>
    <div class="good-item">
        <div class="good-item__image-box">
            <img class="good-item__image" :src="product.images[0].src" :alt="product.name">
        </div>
        <div class="good-item-content">
            <div class="good-item-content__description">
                <p class="good-item-content__title">{{ product.name }}</p>
                <p class="good-item-content__price">{{ product.price }} руб / шт</p>
                <p class="good-item-content__quantity" :style="{ 'color': product.stock_quantity <= 5 ? 'red' : 'white' }">
                    {{ product.stock_quantity !== 0 ? `В наличии: ${product.stock_quantity} шт` : 'Не осталось на складе' }}
                </p>
            </div>
            <div class="good-item-content__quantity-box">
                <CartButtonEasly :chosen-category="chosenCategory" :disabled="product.stock_quantity <= 0"
                    :product="product" :configure-product="configureProduct"
                    @update:configure-product="emit('update:configureProduct', $event)" />
                <p class="good-item-content__spec-button" @click="onClick">Подробнее</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useVuex } from '@/store/useVuex';
import { IGrouppedProduct, IProduct, IProductCategoryResponse } from '@/types/Product';
import { toRefs, watch } from 'vue';
import CartButtonEasly from './CartButtonEasly.vue';
import { useSpecDialog } from '@/hooks/App/useSpecDialog';
import { IConfigureProduct } from '@/types/Configurator';

interface Props {
    product: IProduct
    configureProduct: IConfigureProduct
    chosenCategory: IProductCategoryResponse | null
}
const props = defineProps<Props>()

const { configureProduct, product, chosenCategory } = toRefs(props)

interface Emits {
    (e: 'update:configureProduct', value: IConfigureProduct): void
}

const emit = defineEmits<Emits>()

let store = useVuex();

const { specDialog } = useSpecDialog(store)

const onClick = () => {
    specDialog.value.open(product.value)
}


const { app } = useAppSettings(store)

</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.good-item {
    display: flex;
    align-items: center;
    gap: 30px;
    width: 100%;
    padding: 17px 34px;
    background-color: #181818;
    border-radius: 5px;

    @include table {
        flex-direction: column;
        text-align: center;
    }

    &__image {
        width: 90%;
        height: 90%;
        object-fit: contain;
    }

    &__image-box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 130px;

        @include table {
            flex-direction: column;
            width: 100px;
            height: 100px;
        }

        background-color: white;
        border-radius: 5px;
    }
}

.good-item-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include table {
        flex-direction: column;
    }

    gap: 30px;

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

    &__quantity {}

    &__spec-button {
        cursor: pointer;

        transition: all .3s ease-in-out;

        &:hover {
            text-decoration: underline;
        }
    }


    &__quantity-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 13px;
    }

    &__sum {
        font-weight: 500;
    }
}
</style>