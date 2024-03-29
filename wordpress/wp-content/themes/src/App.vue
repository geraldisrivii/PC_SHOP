<template>
    <CodeDialog ref="code_dialog_instance" />
    <GamburgerDialog ref="gamburger_dialog_instance" />
    <ProfileDialog v-if="isUserLoaded && user != null" ref="profile_dialog_instance" />
    <CartDialog :isDataLoaded="isDataLoaded" ref="cart_dialog_instance" />
    <StatusDialog v-if="isAppLoaded" ref="status_dialog_instance" />
    <Library v-if="isAppLoaded" ref="library" />
    <SpecDialog ref="spec_dialog_instance" />
    <RegisterDialog v-if="isAppLoaded" v-model:isRegisterDialogShow="isRegisterDialogShow" />
    <LoginDialog v-model:isLoginDialogShow="isLoginDialogShow" />
    <SiteHeader v-model:isLoginDialogShow="isLoginDialogShow" v-model:isRegisterDialogShow="isRegisterDialogShow"
        v-model:isProfileShow="isProfileShow" v-model:isBasketShow="isBasketShow" v-if="isDataLoaded" />
    <router-view v-if="isDataLoaded"></router-view>
    <SiteFooter v-if="isDataLoaded" />
</template>
<script setup lang="ts">

// API
import { getSettings } from './api/App/getSettings';
// TYPES
import { Ref, computed, onMounted, ref, watch } from 'vue';
// COMPONENTS
import SiteHeader from './includes/SiteHeader.vue';
// STORE
import { useVuex } from './store/useVuex';
import { useAppSettings } from './hooks/App/useAppSettings';
import SiteFooter from './includes/SiteFooter.vue';
import RegisterDialog from './components/RegisterDialog.vue';
import LoginDialog from './components/LoginDialog.vue';
import WP from '@/axiosWP';
import { useStoreUser } from '@/hooks/User/useStoreUser';
import SpecDialog from './components/SpecDialog.vue';
import { useSpecDialog } from './hooks/App/useSpecDialog';
import { useStatusDialog } from './hooks/App/useStatusDialog';
import { Mutations } from './store';
import StatusDialog from './components/UI/StatusDialog.vue';
import Library from './components/Library.vue';
import { useLibraryDialog } from './hooks/App/useLibraryDialog';
import { useBasketItems } from './hooks/Product/useBasketItems';
import CartDialog from './components/CartDialog.vue';
import { useCartDialog } from './hooks/App/useCartDialog';
import ProfileDialog from './components/ProfileDialog.vue';
import { useProfileDialog } from './hooks/App/useProfileDialog';
import { useGamburgerDialog } from './hooks/App/useGamburgerDialog';
import GamburgerDialog from './components/GamburgerDialog.vue';
import CodeDialog from './components/CodeDialog.vue';
import { useCodeDialog } from './hooks/App/useCodeDialog';

// DATA
let isDataLoaded: Ref<boolean> = ref(false);
let isAppLoaded: Ref<boolean> = ref(false);
let isUserLoaded: Ref<boolean> = ref(false);
let isBasketShow: Ref<boolean> = ref(false)
let isProfileShow: Ref<boolean> = ref(false)
let isRegisterDialogShow: Ref<boolean> = ref(false)
let isLoginDialogShow: Ref<boolean> = ref(false)


let someDialogShow: Ref<boolean> = ref(false)

let store = useVuex();

const { instance: spec_dialog_instance } = useSpecDialog(store)
const { instance: status_dialog_instance } = useStatusDialog(store)
const { instance: library } = useLibraryDialog(store)
const { instance: cart_dialog_instance } = useCartDialog(store)
const { instance: profile_dialog_instance } = useProfileDialog(store)
const { instance: gamburger_dialog_instance } = useGamburgerDialog(store)
const { instance: code_dialog_instance } = useCodeDialog(store)

const { app } = useAppSettings(store)


const { basketItems } = useBasketItems(store)

watch(basketItems, () => {
    localStorage.setItem('basket', JSON.stringify(basketItems.value))
}, { deep: true })

const { user } = useStoreUser(store);
onMounted(async () => {
    app.value = await getSettings()


    isAppLoaded.value = true

    await WP.post('sessions', {}, {
        withCredentials: true
    })

    let response = await WP.get('users/current')
    user.value = response.data.status == false ? null : response.data

    isUserLoaded.value = true

    setTimeout(() => {
        store.commit(Mutations.SET_SPEC_DIALOG, spec_dialog_instance.value)
        store.commit(Mutations.SET_STATUS_DIALOG, status_dialog_instance.value)
        store.commit(Mutations.SET_LIBRARY_DIALOG, library.value)
        store.commit(Mutations.SET_CART_DIALOG, cart_dialog_instance.value)
        store.commit(Mutations.SET_PROFILE_DIALOG, profile_dialog_instance.value)
        store.commit(Mutations.SET_GAMBURGER_DIALOG, gamburger_dialog_instance.value)
        store.commit(Mutations.SET_CODE_DIALOG, code_dialog_instance.value)
    }, 100)




    // set basket items
    let basketItemsLocalStorage = localStorage.getItem('basket')
    basketItems.value = (basketItemsLocalStorage != null && basketItemsLocalStorage != 'undefined' ? JSON.parse(basketItemsLocalStorage) : [])

    isDataLoaded.value = true

})
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;900&display=swap');

@import '@/scss/base/variables.scss';
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #858585;
        border-radius: 100px;
        cursor: pointer;
    }

    &::-webkit-scrollbar-button {
        display: none;
    }
}



html {
    font-size: 62.5%;

    scroll-behavior: smooth;
    overflow-x: hidden;


    @include min-table {
        font-size: 50%;
    }

    @include phone {
        font-size: 42%;
    }
}

body {
    font-family: Rubik;
    font-size: 18px;
    color: white;
    background-color: $background-color;
    overflow-x: hidden;
}

button {
    border: none;
    font-size: 16px;
    font-family: Rubik;
    cursor: pointer;
    background-color: transparent;

    &:disabled {
        cursor: not-allowed;

        img {
            opacity: 0.3;
        }
    }

}

ul {
    list-style: none;
}

.container {
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1200px) {
        padding: 0 10px;
    }
}

a {
    text-decoration: none;
}

input {
    border: none;
    outline: none;

    &:focus {
        outline: none;
    }
}

.button {
    color: #000;
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    display: inline-block;
    border-radius: 5px;
    background: #66E3FF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 17px 34px;
    text-align: center;
    transition: all .3s ease-in-out;
    cursor: pointer;

    &:disabled {
        background: #585858;
        cursor: not-allowed;
    }

    &_white {
        background: #E4E4E4;
    }

    &_check-box {
        background: #141414;
        color: white;

        &--active {
            background: #2D2D2D;
        }
    }
}

.input {
    padding: 15px 21px;
    border-radius: 5px;
    background-color: #E4E4E4;

    font-family: Rubik;
    font-size: 18px;

    font-weight: 500;

    &::placeholder {
        color: #000;
        font-family: Rubik;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: 0.18px;
    }
}

.text-area {
    padding: 15px 21px;
    border-radius: 5px;
    background-color: #E4E4E4;

    font-family: Rubik;
    font-size: 18px;

    font-weight: 500;

    resize: none;

    outline-offset: 0px;

    &::placeholder {
        color: #000;
        font-family: Rubik;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: 0.18px;

    }

    &:focus-visible {
        border: none;
        outline: none;
        transform: none;
    }
}

.line {
    width: 50px;
    height: 7px;
    background-color: white;
}



.close-button {
    position: relative;
    height: 40px;
    width: 40px;

    &__line {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 40px;
        width: 2px;
        background-color: white;
        border-radius: 2px;

        &_1 {
            transform: translate(-50%, -50%) rotate(45deg);
        }

        &_2 {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }
}
</style>