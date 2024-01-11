<template>
    <div class="slider-images-box">
        <div @click="isLibraryShow = false" v-show="isLibraryShow" class="slider-images">
            <button v-if="imagesMoreOne" class="slider-images__button" @click.stop="swiperPrev">
                <img :src="app['general_slider-button_left']" alt="button_left">
            </button>
            <div ref="swiperContainer" class="swiper-container">
                <div class="swiper-wrapper">
                    <div v-for="(image, index) in images" :key="index" class="swiper-slide">
                        <img @click.stop class="slider-images__image" :src="image.path" :alt="image.name">
                    </div>
                </div>
            </div>
            <button v-if="imagesMoreOne" class="slider-images__button " @click.stop="swiperNext">
                <img :src="app['general_slider-button_right']" alt="button_right">
            </button>
            <div class="close-button-wrapper">
                <button @click="$emit('update:isSliderShow', false)" class="close-button">
                    <div class="close-button__line close-button__line_1"></div>
                    <div class="close-button__line close-button__line_2"></div>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref, computed, onMounted, ref } from 'vue';

// SWIPER
import Swiper from 'swiper';
import 'swiper/css';

import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useVuex } from '@/store/useVuex';
import { IProductReviewImage } from '@/types/Product';
import { useSwiper } from '@/hooks/Libs/useSwiper';

const store = useVuex()

const { app } = useAppSettings(store)

// SWIPER
const { swiper, swiperContainer, initializeSwiper, swiperNext, swiperPrev } = useSwiper()


let isLibraryShow: Ref<boolean> = ref(false)

let images: Ref<Array<IProductReviewImage>> = ref([])

const imagesMoreOne = computed(() => images.value.length > 1)



const open = (images_param: Array<IProductReviewImage>) => {
    isLibraryShow.value = true

    images.value = images_param

    initializeSwiper({
        loop: true,
        slidesPerView: 1,
    })
}

const close = () => {
    isLibraryShow.value = false
}

defineExpose({
    open,
    close
})

</script>

<style lang="scss" scoped>
.swiper-container {
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
}

.swiper-wrapper {
    // width: 100%;
}

.swiper-slide {}

.slider-images {
    overflow: hidden;
    padding: 50px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.6);

    &__image {
        height: 80vh;
        width: 100%;
        object-fit: contain;
    }

    &__button {
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
        width: 50px;
        height: 50px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}

.close-button-wrapper {
    position: fixed;
    top: 50px;
    right: 80px;
}
</style>