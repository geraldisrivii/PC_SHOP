<template>
    <RegisterDialog v-model:isRegisterDialogShow="isRegisterDialogShow"/>
    <SiteHeader 
    v-model:isLoginDialogShow="isLoginDialogShow" 
    v-model:isRegisterDialogShow="isRegisterDialogShow" 
    v-model:isProfileShow="isProfileShow" 
    v-model:isBasketShow="isBasketShow" v-if="isDataLoaded" />
    <router-view v-if="isDataLoaded"></router-view>
    <SiteFooter v-if="isDataLoaded" />
    <Preloader ref="preloader" />
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
import Preloader from './components/Preloader.vue';
import RegisterDialog from './components/RegisterDialog.vue';

// DATA
let isDataLoaded: Ref<boolean> = ref(false);
let isBasketShow: Ref<boolean> = ref(false)
let isProfileShow: Ref<boolean> = ref(false)
let isRegisterDialogShow: Ref<boolean> = ref(true)
let isLoginDialogShow: Ref<boolean> = ref(false)

const preloader = ref<InstanceType<typeof Preloader> | null>(null)
let store = useVuex();
const { app } = useAppSettings(store)


onMounted(async () => {
    app.value = await getSettings()
    isDataLoaded.value = true
})
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;900&display=swap');

@import '@/scss/base/variables.scss';
@import '@/scss/base/mixins.scss';


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;

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
    border-radius: 5px;
    background: #66E3FF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 17px 34px;
    text-align: center;
    transition: all .3s ease-in-out;
    &:disabled{
        background: #E4E4E4;
        cursor: not-allowed;
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
</style>