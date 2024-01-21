<template>
    <div class="spec">
        <p class="spec__label">{{ specLabel }}</p>
        <div class="spec-value-box">
            <p class="spec__value">{{ specValue }}</p>
            <button v-if="spec" class="spec__button" @click="onClick">?</button>
        </div>
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
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.spec {
    width: 100%;
    padding: 18px;
    background-color: #0C0C0C;
    border-radius: 5px;
    display: flex;
    align-items: center;
    position: relative;
    flex-wrap: wrap;

    @include table {
        padding: 14px;
    }

    @include phone {
        padding: 12px;
    }

    &__label {
        color: #DBDBDB;
        font-size: 16px;
        font-weight: 300;
        text-transform: uppercase;
        margin-right: 12px;

        // text-wrap: nowrap;
        width: max-content;

        @include table {
            font-size: 16px;
            text-transform: none;
        }
    }

    &__value {
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        width: fit-content;
        
        @include table {
            font-size: 16px;
            margin-right: 20px;
        }
    }

    &__button {
        border-radius: 100%;
        border: 1px solid lightgray;
        height: 20px;
        width: 20px;
        text-align: center;
        color: lightgray;
        position: absolute;
        top: -6px;
        right: -24px;
        // transform: translate(7px, -4px);

        @include table {
            right: 0px;
        }
    }

    .spec-value-box {
        position: relative;
    }
}
</style>