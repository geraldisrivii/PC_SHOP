<template>
    <div class="first-section-wrapper">
        <div class="first-section">
            <div class="first-section-container container">
                <div class="first-section__image-box">
                    <img @load="onImageLoaded" :src="product.images[0].src" class="first-section__image"
                        alt="first-section__image">
                </div>
                <div class="first-section__description-box">
                    <div class="first-section__line line"></div>

                    <p class="first-section__title title">{{ product.name }}</p>

                    <div class="product-description-rate">
                        <img v-for="(r, index) in rate" :key="index" :src="app['general_star-icon']"
                            alt="general_star-icon">
                        <img v-for="(inr, index) in inRate" :key="index" :src="app['general_in-star-icon']"
                            alt="general_in-star-icon">
                    </div>
                    <p class="first-section__price">{{ product.price }} ₽</p>
                    <div class="first-section__description" v-html="product.description"></div>
                    <div class="first-section__buttons">
                        <CartButton/>
                        <button @click="$router.push({ name: 'configurator', params: { product: product.slug } })" class="button button_white first-section__button">{{ page['first-section_button-conf-text']
                        }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { usePageSettings } from '@/hooks/App/usePageSettings';
import { useCurrentProduct } from '@/hooks/Product/useCurrentProduct';
import { Mutations } from '@/store/basket';
import { useVuex } from '@/store/useVuex';
import { IGrouppedProduct } from '@/types/Product';
import CartButton from '@/components/CartButton.vue';
import { computed, ComputedRef, DeprecationTypes, onMounted, ref, Ref, watch } from 'vue';
import { useRoute } from 'vue-router';
interface Emits {
    (e: 'load'): void;
}

const { product } = useCurrentProduct()

const emit = defineEmits<Emits>()

const store = useVuex();

const { page } = usePageSettings(store)
const { app } = useAppSettings(store)

const rate: ComputedRef<number> = computed(() => Math.floor(Number(product.value.average_rating)))
const inRate: ComputedRef<number> = computed(() => 5 - rate.value)

const previousImageSrc: Ref<string | null> = ref(null)

const onImageLoaded = () => {
    emit('load')

    previousImageSrc.value = product.value.images[0].src
}




watch(product, () => {
    if (!previousImageSrc.value) {
        return;
    }
    if (product.value.images[0].src != previousImageSrc.value) {
        return;
    }
    emit('load')
})


</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.first-section-wrapper {
    padding-top: 95px;
}

.first-section {

    background-color: #121212;

    &__image-box {
        width: 100%;

        display: flex;
        justify-content: center;
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: contain;

        @include table {
            width: 70%;
            height: 70%;
        }
    }

    &__description-box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @include table {
            align-items: center;
            text-align: center;
        }
    }

    &__title {
        margin-bottom: 15px;
    }

    &__description {
        margin-bottom: 48px;
    }

    &__button {}

    &__buttons {
        display: flex;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;

        @include table {
            justify-content: center;
        }
    }

    &__price {
        margin-bottom: 25px;
        font-size: 3rem;
        font-weight: 400;
        color: #66E3FF;
    }

    &__line {
        margin-bottom: 37px;
    }
}

.first-section-container {
    padding-top: 50px;
    padding-bottom: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include table {
        grid-template-columns: 1fr;
    }

    align-items: center;
    gap: 80px;
}

.product-description-rate {
    margin-bottom: 25px;
}
</style>