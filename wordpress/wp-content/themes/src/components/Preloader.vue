<template>
    <div class="preloader" :class="{ show: isPreloaderShow }">
        <!-- <img :src="app['general_preloader-icon']" alt="preloader-icon"> -->
    </div>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useVuex } from '@/store/useVuex';
import { Ref, ref } from 'vue';


const store = useVuex();

const { app } = useAppSettings(store);


let isPreloaderShow: Ref<boolean> = ref(false)

const open = () => {
    isPreloaderShow.value = true
}

const close = () => {
    isPreloaderShow.value = false
}
defineExpose({
    open,
    close
})

</script>

<style lang="scss" scoped>
.preloader {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transition: all 0.3s ease;

    background-color: #1C1C1C;
    opacity: 0;
    display: none;
}

.show {
    display: block;

    opacity: 1;
}
</style>