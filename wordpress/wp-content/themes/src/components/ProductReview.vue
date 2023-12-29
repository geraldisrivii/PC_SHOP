<template>
    <div class="review">
        <div class="review-description-rate">
            <img v-for="(r, index) in rate" :key="index" :src="app['general_star-icon']" alt="general_star-icon">
            <img v-for="(inr, index) in inRate" :key="index" :src="app['general_in-star-icon']" alt="general_in-star-icon">
        </div>
        <div class="review-description-box">
            <p class="review-description-box__title">{{ title }}</p>
            <div class="review-description-box__text" v-html="text"></div>
        </div>
        <div class="review-images">
            <button v-for="image in images" class="review-images__button">
                <img class="review-images__image" :src="image.path" :alt="image.path">
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useVuex } from '@/store/useVuex';
import { IProductReview, IProductReviewImage } from '@/types/Product';
import { Ref, ref, ComputedRef, computed } from 'vue';




interface Props {
    average_rating: number;
    title: string;
    text: string;
    images: Array<IProductReviewImage>
}

const { average_rating } = defineProps<Props>()

const rate: Ref<number> = ref(Math.floor(average_rating))

const inRate: ComputedRef<number> = computed(() => 5 - rate.value)


const store = useVuex();

const { app } = useAppSettings(store)

</script>

<style lang="scss" scoped>
.review {
    padding: 18px 28px;
    display: flex;
    flex-direction: column;

    background-color: #0C0C0C;
    border-radius: 5px;
}

.review-description-rate {
    margin-bottom: 22px;
}

.review-description-box {
    &__title {
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 15px;
    }


    &__text {
        margin-bottom: 30px;
    }
}

.review-images {
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;

    &__button {
        padding: 3px;
        border-radius: 5px;
        background-color: white;
    }

    &__image {
        width: 80px;
        height: 80px;
        object-fit: contain;
    }
}
</style>