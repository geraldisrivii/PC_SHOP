<template>
    <div class="first-section-wrapper">
        <div class="first-section">
            <div class="first-section-container container">
                <h1 class="first-section__title title">Конфигуратор</h1>
                <div class="first-section-slider">
                    <div ref="swiperContainer" class="swiper-container">
                        <div class="swiper-wrapper">
                            <div @click="updateChoosenCategory(category)" v-for="category in categories" :key="category.id"
                                class="swiper-slide">
                                <img v-if="category.image" :src="category.image.src" :alt="category.image.name">
                                <p>{{ category.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="first-section-products-container">
                    <div class="first-section-goods">
                        <GoodItem v-for="product in products" :key="product.id"
                            v-model:adding-field="ConfigureProduct[choosenCategory.slug]" :product="product" />
                    </div>
                    <div class="first-section-filters">
                        <!-- <CustomSelect
                        
                        /> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref, computed, onMounted, ref, watch } from 'vue';
import WOO from '@/axiosWoocomerce'
import { IProduct, IProductCategoryResponse } from '@/types/Product';

import Swiper from 'swiper';
import 'swiper/css';
import GoodItem from '@/components/GoodItem.vue';
import CustomSelect from '@/components/CustomSelect.vue';
import { useSwiper } from '@/hooks/Libs/useSwiper'
import { getCategories } from '@/api/Katalog/getCategories';

const { swiper, swiperContainer, initializeSwiper } = useSwiper()

const categories: Ref<Array<IProductCategoryResponse>> = ref([])

const choosenCategory: Ref<IProductCategoryResponse | null> = ref(null)

const updateChoosenCategory = (category: IProductCategoryResponse) => {
    choosenCategory.value = category
}


const products: Ref<Array<IProduct>> = ref([])

const getProducts = async () => {
    const response = await WOO.get(`products?category=${choosenCategory.value.id}`)

    return response.data
}

watch(choosenCategory, async () => {
    if (choosenCategory) {
        products.value = await getProducts()
    }
}, { deep: true })


interface IConfigureProduct {
    cpu: object | null;
    gpu: object | null;
    ram: object | null;
    motherboard: object | null;
    ssd: object | null;
    hdd: object | null;
    case: object | null;
    pb: object | null;
    pc_fan: object | null;
    cpu_cooler: object | null;
}

const ConfigureProduct: Ref<IConfigureProduct> = ref({
    cpu: null,
    gpu: null,
    ram: null,
    motherboard: null,
    ssd: null,
    hdd: null,
    case: null,
    pb: null,
    pc_fan: null,
    cpu_cooler: null,
})

onMounted(async () => {
    categories.value = await getCategories({
        per_page: 100,
        parent: 19,
        order: 'desc',
    })

    choosenCategory.value = categories.value[0]

    initializeSwiper({
        slidesPerView: 'auto',
        spaceBetween: 30,
    })
})

</script>

<style lang="scss" scoped>
.first-section-container {}

.first-section {
    padding: 120px 0px;
    background-color: rgb(19, 19, 19);

    &__title {
        text-align: center;
        margin-bottom: 80px;
    }
}

.first-section-slider {
    margin-bottom: 60px;
}

.swiper-container {

    overflow-x: hidden;
}


.first-section-wrapper {
    padding-top: 100px;
}

.swiper-wrapper {
    // display: flex;
    // gap: 30px;
    // width: 100%;
}

.swiper-slide {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 15px;
    width: 250px;
    align-items: center;
    background-color: rgb(24, 24, 24);
    border-radius: 5px;
    padding: 15px;

    img {
        height: 80px;
        width: 80px;
        object-fit: contain;
    }

    p {
        height: 40px;
        text-align: center;
    }
}

.first-section-products-container {
    display: grid;
    grid-template-columns: 5fr 2fr;
    gap: 40px;
}

.first-section-goods {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.first-section-filters {
    padding: 15px 20px;
    background-color: rgb(24, 24, 24);
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    gap: 6px;
}
</style>