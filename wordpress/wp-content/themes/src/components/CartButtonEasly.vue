<template>
    <div class="cart-button">
        <button :disabled="disabled" @click="onClick" class="button cart-button__button">{{ productInAddingField ? 'Убрать' : 'Добавить' }}</button>
    </div>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { usePageSettings } from '@/hooks/App/usePageSettings';
import { useVuex } from '@/store/useVuex';
import { IProduct } from '@/types/Product';
import deepEqual from 'deep-equal';
import { computed, toRefs } from 'vue';

interface Props {
    disabled?: boolean
    product: IProduct
    addingField: object | null
}

const props = defineProps<Props>()

const { addingField, product, disabled = false } = toRefs(props)

interface Emits {
    (e: 'update:addingField', value: object | null): void
}

const emit = defineEmits<Emits>()

const productInAddingField = computed(() => {
    return deepEqual(addingField.value, product.value)
})


const onClick = () => {
    if(productInAddingField.value){
        return emit('update:addingField', null)
    }

    emit('update:addingField', product.value)
}



const store = useVuex()

const { page } = usePageSettings(store)

const { app } = useAppSettings(store)


</script>

<style lang="scss" scoped></style>