<template>
    <button @click="onClick" class="basket-button">
        <img :src="app['header-basket_icon']" alt="header-basket_icon">
        <div class="basket-button__aroud">
            <p class="basket-button__count">4</p>
        </div>
    </button>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useVuex } from '@/store/useVuex';

let store = useVuex()

let { app } = useAppSettings(store);


interface Props {
    isBasketShow: boolean
}

const props = defineProps<Props>()


const emit = defineEmits<{
    (e: 'update:isBasketShow', status: boolean): void
}>()

const onClick = () => {
    emit('update:isBasketShow', !props.isBasketShow)
}

</script>

<style scoped lang="scss">
@import "@/scss/base/mixins.scss";

.basket-button {
    
    display: flex;
    align-items: center;
    gap: 10px;

    img {
        @include table{
            width: 35px;
            height: 35px;
        }
    }

    &__aroud {
        border-radius: 100%;
        height: 30px;
        width: 30px;
        border: 2px solid lightgray;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__count {

        color: white;
    }
}
</style>