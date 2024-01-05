<template>
    <button @click="addToCart" class="button first-section__button">{{ page['first-section_button-text']
    }}</button>
</template>

<script setup lang="ts">
import { usePageSettings } from '@/hooks/App/usePageSettings';
import { Mutations } from '@/store/basket';
import { useVuex } from '@/store/useVuex';
import { IGrouppedProduct } from '@/types/Product';

const store = useVuex()

const { page } = usePageSettings(store)

interface Props {
    product: IGrouppedProduct
}

const { product } = defineProps<Props>()

const addToCart = () => {
    store.commit('basket/' + Mutations.ADD_BASKET_ELEMENTS, product.id)
}


</script>

<style scoped></style>