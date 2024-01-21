<template>
    <div class="cart-button">
        <button :disabled="disabled" @click="onClick" class="button cart-button__button">{{ productInAddingField ? 'Убрать' : 'Добавить' }}</button>
    </div>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { usePageSettings } from '@/hooks/App/usePageSettings';
import { useConfiguratorCategories } from '@/hooks/Configurator/useConfiguratorCategories';
import { useVuex } from '@/store/useVuex';
import { IConfigureProduct } from '@/types/Configurator';
import { IProduct, IProductCategoryResponse } from '@/types/Product';
import deepEqual from 'deep-equal';
import { computed, toRefs } from 'vue';

interface Props {
    disabled?: boolean
    product: IProduct
    chosenCategory: IProductCategoryResponse | null
    configureProduct: IConfigureProduct
}

const props = defineProps<Props>()

const { configureProduct, product, disabled = false, chosenCategory } = toRefs(props)

interface Emits {
    (e: 'update:configureProduct', value: IConfigureProduct): void
}

const emit = defineEmits<Emits>()

const productInAddingField = computed(() => {
    return configureProduct.value[chosenCategory.value.slug]?.id === product.value.id
})


const onClick = () => {
    if (productInAddingField.value) {
        return emit('update:configureProduct', Object.assign({}, configureProduct.value, { [chosenCategory.value.slug]: null }))
    }
    emit('update:configureProduct', Object.assign({}, configureProduct.value, { [chosenCategory.value.slug]: product.value }))
}



const store = useVuex()

const { page } = usePageSettings(store)

const { app } = useAppSettings(store)


</script>

<style lang="scss" scoped></style>