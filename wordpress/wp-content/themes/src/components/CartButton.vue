<template>
    <button @click="addToCart" class="button first-section__button">{{ page['first-section_button-text']
    }}</button>
</template>

<script setup lang="ts">
import { usePageSettings } from '@/hooks/App/usePageSettings';
import { useBasketItems } from '@/hooks/Product/useBasketItems';
import { Mutations } from '@/store/basket';
import { useVuex } from '@/store/useVuex';
import { IGrouppedProduct } from '@/types/Product';

const store = useVuex()

const { page } = usePageSettings(store)

interface Props {
    product: IGrouppedProduct
}

const { product } = defineProps<Props>()

const { basketItems } = useBasketItems(store)

const addToCart = () => {
    // store.commit('basket/' + Mutations.ADD_BASKET_ELEMENTS, product)

    basketItems.value.push(product)
}


</script>

<style scoped></style>