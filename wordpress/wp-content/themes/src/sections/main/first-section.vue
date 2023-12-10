<template>
    <div ref="box" :style="{ 'background': `url(${page['first-section_background_image']}) no-repeat center / cover` }"
        class="first-section">
        <div class="container first-section-container">
            <div class="first-section-left">
                <p class="first-section-left__title">{{ page['first-section_title'] }}</p>
                <button @click="$router.push({ name: 'katalog' })" class="first-section-left__button button">{{
                    page['first-section_button_text'] }}</button>
            </div>
            <div class="first-section-right">
                <img ref="image" :src="page['first-section_image']" alt="first-section_image">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useLoad } from '@/hooks/App/useLoad';
import { usePageSettings } from '@/hooks/App/usePageSettings';
import store from '@/store';
import imagesLoaded from 'imagesloaded';
import { Ref, onMounted, onUpdated, ref } from 'vue';

let { page } = usePageSettings(store)

const emit = defineEmits<{
    (e: 'load'): void
}>()

// refs
const box: Ref<HTMLElement | null> = ref(null)
const image: Ref<HTMLElement | null> = ref(null)


let { loader } = useLoad(1)

loader.value.onAllisLoaded = () => {
    emit('load')
}


onMounted(() => {
    imagesLoaded([box.value, image.value], () => {
        loader.value.load()
    })
})





</script>

<style lang="scss" scoped>
@import "@/scss/base/mixins.scss";

.first-section {
    padding-top: 100px;
}

.first-section-container {
    display: grid;
    grid-template-columns: 600px 1fr;

    @include table {
        grid-template-columns: 1fr;
    }

    align-items: center;
    gap: 80px;
}

.first-section-left {
    @include table {
        z-index: 1;
        position: relative;
        height: 100vh;
    }

    &__title {


        @include table {
            padding: 10px;
            background-color: rgba(41, 41, 41, 0.8);
        }

        color: #FFF;
        font-family: Rubik;
        font-size: 4rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 1.6px;
        text-transform: uppercase;
        margin-bottom: 50px;
    }

    &__button {}
}

.first-section-right {
    @include table {
        position: absolute;
        top: 120px;
        right: 0;
    }

    height: 530px;
    width: 100%;

    @include laptop {
        height: unset;
        width: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;

        @include laptop {
            height: unset;
            // width: 100%;
        }

    }
}
</style>