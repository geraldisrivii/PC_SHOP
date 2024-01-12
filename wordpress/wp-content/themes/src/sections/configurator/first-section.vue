<template>
    <div class="first-section-wrapper">
        <div class="first-section">
            <div class="first-section-container container">
                <h1 class="first-section__title title">Конфигуратор</h1>
                <div class="first-section-slider">
                    <div ref="swiperContainer" class="swiper-container">
                        <div class="swiper-wrapper">
                            <ConfiguratorCategory
                            class="swiper-slide"
                            v-for="category in categories" :key="category.id"
                            :category="category"
                            :configure-product="ConfigureProduct"
                            v-model:choosen-category="choosenCategory"
                            />
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
                <div class="first-section-total-box">
                    <div class="first-section-total-panel">
                        <div @click="openInfoDialog" class="first-section-total-panel__left">
                            <p class="first-section-total-panel__text"
                                :style="{ 'color': isAllGroupsFilled ? 'green' : 'red' }">
                                {{ isAllGroupsFilled ? 'Все отлично!' : 'Не достает обязательных компонентов' }}
                            </p>
                            <button class="first-section-total-panel__button">?</button>
                        </div>
                        <div class="first-section-total-panel__right">
                            <p class="first-section-total-panel__price">
                                Итого: 54000 ₽
                            </p>
                            <button :disabled="!isAllGroupsFilled" class="button">
                                Добавить в корзину
                            </button>
                        </div>
                    </div>
                </div>
                <my-dialog v-model:isDialogShow="isInfoDialogShow">
                    <div class="info-dialog">
                        <p class="info-dialog__title">Недостающие категории</p>
                        <p class="info-dialog__text">Вам нужно добавить хотя бы один из элементов в категории указанных в недостающей группе категорий</p>
                        <div class="info-dialog-categories">
                            <MissingCategoriesGroup v-for="(group, index) in missingGroups" :key="index" :groupe="group"
                            :categories="categories"
                            :configureProduct="ConfigureProduct"
                            />
                        </div>
                    </div>
                </my-dialog>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import MissingCategoriesGroup from '../../components/MissingCategoriesGroup.vue'
import { Ref, computed, onMounted, ref, watch } from 'vue';
import WOO from '@/axiosWoocomerce'
import { IProduct, IProductCategoryResponse } from '@/types/Product';

// import 'swiper/css';
import GoodItem from '@/components/GoodItem.vue';
import { useSwiper } from '@/hooks/Libs/useSwiper'
import { getCategories } from '@/api/Katalog/getCategories';
import { getProducts } from '@/api/Katalog/getProducts';
import { useConfigureProduct } from '@/hooks/Configurator/useConfigureProduct'
import ConfiguratorCategory from '@/components/ConfiguratorCategory.vue';

const { swiper, swiperContainer, initializeSwiper } = useSwiper()

const categories: Ref<Array<IProductCategoryResponse>> = ref([])

const choosenCategory: Ref<IProductCategoryResponse | null> = ref(null)

const updateChoosenCategory = (category: IProductCategoryResponse) => {
    choosenCategory.value = category
}


const products: Ref<Array<IProduct>> = ref([])

watch(choosenCategory, async () => {
    if (choosenCategory) {
        products.value = await getProducts({ category: choosenCategory.value.id })
    }
}, { deep: true })


const isInfoDialogShow = ref(false)
const openInfoDialog = () => {
    isInfoDialogShow.value = true
}

const { ConfigureProduct, isAllGroupsFilled, missingGroups } = useConfigureProduct()

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
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.first-section-total-box {}

.first-section-total-panel {
    background-color: rgb(24, 24, 24);
    border-radius: 5px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
    align-items: center;

    &__left {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;
        cursor: pointer;
    }

    &__text {}

    &__button {
        border-radius: 100%;
        border: 1px solid lightgray;
        height: 20px;
        width: 20px;
        text-align: center;
        color: lightgray;
        position: absolute;
        top: -6px;
        right: -24px;
        // transform: translate(7px, -4px);

        @include table {
            right: 0px;
        }
    }

    &__right {
        display: flex;
        align-items: center;
    }

    &__price {
        margin-right: 30px;
    }
}

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
    align-items: stretch !important;
    // display: flex;
    // gap: 30px;
    // width: 100%;
}


// .swiper-slide-good {
//     display: flex;
//     flex-direction: column;
//     gap: 20px;
//     align-items: center;

//     &__image {
//         width: 90%;
//         height: 90%;
//     }

//     &__image-box {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         border-radius: 5px;
//         background-color: white;
//         width: 120px;
//         height: 120px;
//     }

//     &__name {
//         text-align: center;
//         height: 60px;
//     }
// }

// .swiper-slide {
//     height: 100%;
//     width: 250px;
//     background-color: rgb(24, 24, 24);
//     cursor: pointer;
//     border-radius: 5px;
//     padding: 15px 15px 0px 15px;

//     &__category {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         height: 100%;
//         gap: 20px;

//         img {
//             height: 120px;
//             width: 120px;
//             object-fit: contain;
//         }

//         p {
//             height: 60px;
//             text-align: center;
//         }
//     }

// }

.first-section-products-container {
    display: grid;
    grid-template-columns: 5fr 2fr;
    gap: 40px;
    margin-bottom: 40px;
}

.first-section-goods {
    display: flex;
    flex-direction: column;
    height: 600px;
    overflow-y: scroll;
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


.info-dialog {
    &__title {}
    &__text {}
}
.info-dialog-categories {
}

</style>