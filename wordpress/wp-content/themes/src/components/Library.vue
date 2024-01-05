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
            <button @click="$emit('update:isSliderShow', false)" class="close-button">
                <div class="close-button__line close-button__line_1"></div>
                <div class="close-button__line close-button__line_2"></div>
            </button>
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


const swiperContainer: Ref<HTMLElement | null> = ref(null)

let swiper: Ref<Swiper | null> = ref(null)

let isLibraryShow: Ref<boolean> = ref(false)

let images: Ref<Array<IProductReviewImage>> = ref([])

const imagesMoreOne = computed(() => images.value.length > 1)

const store = useVuex()

const { app } = useAppSettings(store)

const initializeSwiper = () => {
    swiper.value = new Swiper(swiperContainer.value, {
        loop: true,
        slidesPerView: 1,
    });
}

const swiperPrev = () => {
    swiper.value.slidePrev();
}
const swiperNext = () => {
    swiper.value.slideNext();
}


const open = (images_param: Array<IProductReviewImage>) => {
    isLibraryShow.value = true

    images.value = images_param

    initializeSwiper()
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

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}

.close-button {
    position: fixed;
    top: 50px;
    right: 80px;
    height: 40px;
    width: 40px;

    &__line {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 40px;
        width: 2px;
        background-color: white;
        border-radius: 2px;

        &_1 {
            transform: rotate(45deg);
        }

        &_2 {
            transform: rotate(-45deg);
        }
    }
}
</style>