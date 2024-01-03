<template>
    <StatusDialog v-if="isAppLoaded" ref="status_dialog_instance" />
    <SpecDialog ref="spec_dialog_instance" />
    <RegisterDialog v-model:isRegisterDialogShow="isRegisterDialogShow" />
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

// DATA
let isDataLoaded: Ref<boolean> = ref(false);
let isAppLoaded: Ref<boolean> = ref(false);
let isBasketShow: Ref<boolean> = ref(false)
let isProfileShow: Ref<boolean> = ref(false)
let isRegisterDialogShow: Ref<boolean> = ref(false)
let isLoginDialogShow: Ref<boolean> = ref(false)


let store = useVuex();

const { instance: spec_dialog_instance } = useSpecDialog(store)
const { instance: status_dialog_instance } = useStatusDialog(store)

const { app } = useAppSettings(store)

onMounted(async () => {
    app.value = await getSettings()

    isAppLoaded.value = true

    await WP.post('sessions', {}, {
        withCredentials: true
    })

    const { user } = useStoreUser(store);

    let response = await WP.get('users/current')

    user.value = response.data.status == false ? null : response.data

    store.commit(Mutations.SET_SPEC_DIALOG, spec_dialog_instance.value)
    store.commit(Mutations.SET_STATUS_DIALOG, status_dialog_instance.value)

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
</style>