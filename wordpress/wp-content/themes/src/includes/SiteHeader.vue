<template>
    <header class="header container">
        <div class="header-left">
            <RouterLink :to="{ name: 'main' }" class="header-left__title">INGC</RouterLink>
            <SiteMenu class="header-left__menu" />
        </div>
        <div class="header-right">

            <ProfileButton v-if="store.state.user.user" />
            <template v-else>
                <ProfileAddButton :is-register-dialog-show="isRegisterDialogShow"
                    @update:is-register-dialog-show="updateRegisterDialogShow" />
                <ProfileLoginButton :is-login-dialog-show="isLoginDialogShow"
                    @update:is-login-dialog-show="updateLoginDialogShow" />
            </template>
            <BasketButton />
            <GamburgerButton/>
        </div>
    </header>
</template>

<script setup lang="ts">
import BasketButton from '@/components/BasketButton.vue';
import ProfileButton from '@/components/ProfileButton.vue';
import ProfileAddButton from '@/components/ProfileAddButton.vue';
import ProfileLoginButton from '@/components/ProfileLoginButton.vue';
import SiteMenu from '@/components/UI/SiteMenu.vue';
import { useVuexWithRef } from '@/store/useVuex';
import GamburgerButton from '@/components/GamburgerButton.vue';


let store = useVuexWithRef();

interface Props {
    isRegisterDialogShow: boolean;
    isLoginDialogShow: boolean;
}

const props = defineProps<Props>()

const emit = defineEmits<{
    (e: 'update:isBasketShow', status: boolean): void,
    (e: 'update:isProfileShow', status: boolean): void,
    (e: 'update:isRegisterDialogShow', status: boolean): void,
    (e: 'update:isLoginDialogShow', status: boolean): void,
}>()

const updateRegisterDialogShow = () => {
    emit('update:isRegisterDialogShow', !props.isRegisterDialogShow)
}

const updateLoginDialogShow = () => {
    emit('update:isLoginDialogShow', !props.isLoginDialogShow)
}



</script>

<style scoped lang="scss">
@import "@/scss/base/mixins.scss";

.header {
    position: fixed;
    z-index: 10;
    width: 80%;

    @include laptop {
        width: 100%;
        padding: 10px 15px;
    }

    left: 50%;
    transform: translate(-50%, 0);
    background-color: #121212;
    border-radius: 0px 0px 10px 10px;
    padding: 10px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-left {
    display: flex;
    align-items: center;

    &__title {
        color: #FFF;
        font-family: Rubik;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        margin-right: 50px;
    }

    &__menu {
        @include min-table {
            display: none;
        }
    }
}

.header-right {
    display: flex;
    align-items: center;
    gap: 25px;

    @include table {
        gap: 20px;
    }
}
</style>