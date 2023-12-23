<template>
    <div class="spec">
        <p class="spec__label">{{ specLabel }}</p>
        <p class="spec__value">{{ specValue }}</p>
        <button v-if="spec" class="spec__button" @click="onClick">?</button>
    </div>
</template>

<script setup lang="ts">
import { useSpecDialog } from '@/hooks/App/useSpecDialog';
import { useVuex } from '@/store/useVuex';
import { IProduct } from '@/types/Product';

interface Props {
    spec?: IProduct;
    specLabel: string;
    specValue: string;
}

const { spec, specLabel, specValue } = defineProps<Props>()


let store = useVuex();
const { specDialog } = useSpecDialog(store)

const onClick = () => {
    specDialog.value.open(spec)
}


</script>

<style lang="scss" scoped>
.spec {
    width: 100%;
    padding: 18px;
    background-color: #0C0C0C;
    border-radius: 5px;
    display: flex;
    align-items: center;

    &__label {
        color: #DBDBDB;
        font-size: 16px;
        font-weight: 300;
        text-transform: uppercase;
        margin-right: 12px;
    }

    &__value {
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
    }

    &__button {
        border-radius: 100%;
        border: 1px solid lightgray;
        height: 20px;
        width: 20px;
        text-align: center;
        color: lightgray;
        transform: translate(7px, -4px);
    }
}
</style>