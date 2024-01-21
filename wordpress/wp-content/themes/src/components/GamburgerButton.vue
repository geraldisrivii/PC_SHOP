<template>
    <button @click="onClick" class="gamburger-button">
        <div class="gamburger-button__line gamburger-button__line_1"></div>
        <div class="gamburger-button__line gamburger-button__line_2"></div>
        <div class="gamburger-button__line gamburger-button__line_3"></div>
    </button>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useCartDialog } from '@/hooks/App/useCartDialog';
import { useGamburgerDialog } from '@/hooks/App/useGamburgerDialog';
import { useBasketItemsGrouped } from '@/hooks/Product/useBasketItemsGrouped';
import { useStoreUser } from '@/hooks/User/useStoreUser';
import { useVuex } from '@/store/useVuex';

let store = useVuex()


const { gamburgerDialog } = useGamburgerDialog(store)


const onClick = () => {
    gamburgerDialog.value.open()
}



</script>

<style scoped lang="scss">
@import "@/scss/base/mixins.scss";

.gamburger-button {
    display: flex;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    border-radius: 100%;
    height: 40px;
    width: 40px;

    display: none;

    @include table{
        display: flex;
    }

    &__line {
        width: 25px;
        height: 3px;
        background-color: black;

        &_1 {}

        &_2 {}

        &_3 {}
    }
}
</style>