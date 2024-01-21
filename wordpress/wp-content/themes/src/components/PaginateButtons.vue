<template>
    <div class="paginate-buttons">
        <button @click="onClick($event, pageCount - 1)" class="paginate-buttons__button paginate-buttons__button_decrement">
            <img :src="app['general_paginate-icon']" alt="general_paginate-icon">
        </button>
        <p class="paginate-buttons__text">{{ pageCount }}</p>
        <button @click="onClick($event, pageCount + 1)" class="paginate-buttons__button paginate-buttons__button_increment">
            <img :src="app['general_paginate-icon']" alt="general_paginate-icon">
        </button>
    </div>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useVuex } from '@/store/useVuex';
import { toRefs, watch } from 'vue';


const store = useVuex()

const { app } = useAppSettings(store)

interface Props {
    pageCount: number;
    isAll: boolean;
}

interface Emits {
    (e: 'update:pageCount', value: number): void
}
const emit = defineEmits<Emits>()
const props = defineProps<Props>()

const { pageCount, isAll } = toRefs(props)

watch(isAll, () => {
    if(isAll.value){
        emit('update:pageCount', pageCount.value - 1)
    }
})

const onClick = (event: Event, value: number) => {
    if(value < 1){
        return;
    }
    emit('update:pageCount', value)
}


</script>

<style lang="scss" scoped>
.paginate-buttons {
    display: flex;

    align-items: center;

    gap: 15px;

    &__button {
        width: 20px;
        height: 20px;

        img {
            width: 20px;
            height: 20px;
            object-fit: contain;
        }

        &_decrement {
            transform: rotate(180deg);
        }
    }

    &__text {
        font-weight: 500;
        font-size: 18;
    }
}
</style>