<template>
    <div class="first-section-wrapper">
        <div class="first-section">
            <div class="first-section-container container">
                <h1 class="first-section__title title">Конфигуратор</h1>
                <div class="first-section-slider">
                    <div ref="swiperContainer" class="swiper-container">
                        <div class="swiper-wrapper">
                            <ConfiguratorCategory class="swiper-slide" v-for="category in categories" :key="category.id"
                                :category="category" :configure-product="ConfigureProduct"
                                v-model:choosen-category="choosenCategory" />
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
                            <button v-if="!isAllGroupsFilled" class="first-section-total-panel__button">?</button>
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
                    <div class="info-dialog-wrapper">
                        <div class="info-dialog">
                            <p class="info-dialog__title title">Недостающие категории</p>
                            <p class="info-dialog__text">Вам нужно добавить хотя бы один из элементов в категории указанных
                                в недостающей группе категорий</p>
                            <div class="info-dialog-categories">
                                <MissingCategoriesGroup v-for="(group, index) in missingGroups" :key="index" :groupe="group"
                                    :categories="categories" :configureProduct="ConfigureProduct"
                                    v-model:choosen-category="choosenCategory"
                                    v-model:is-info-dialog-show="isInfoDialogShow" />
                            </div>
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

import GoodItem from '@/components/GoodItem.vue';
import { useSwiper } from '@/hooks/Libs/useSwiper'
import { getCategories } from '@/api/Katalog/getCategories';
import { getProducts } from '@/api/Katalog/getProducts';
import { useConfigureProduct } from '@/hooks/Configurator/useConfigureProduct'
import ConfiguratorCategory from '@/components/ConfiguratorCategory.vue';
import { useConfiguratorCategories } from '@/hooks/Configurator/useConfiguratorCategories';
import { useConfiguratorProducts } from '@/hooks/Configurator/useConfiguratorProducts';

const { swiperContainer, initializeSwiper } = useSwiper()

const { ConfigureProduct, isAllGroupsFilled, missingGroups } = useConfigureProduct()

const { categories, choosenCategory } = useConfiguratorCategories()

const filters = computed(() => {

    const allProductsFilters = Object.values(ConfigureProduct.value).filter(item => item).map((product: IProduct) => {
        return product.cfs.filters
    }).flat()

    return allProductsFilters.filter(item => item.link[0].slug == choosenCategory.value.slug)
})

watch(filters, () => {
    console.log(filters.value)
})


const { products } = useConfiguratorProducts(choosenCategory, filters)



const isInfoDialogShow = ref(false)

const openInfoDialog = () => {
    if (!isAllGroupsFilled.value) {
        isInfoDialogShow.value = true
    }
}


onMounted(async () => {
    categories.value = await getCategories({
        per_page: 100,
        parent: 19,
        order: 'desc',
    })

    choosenCategory.value = categories.value[0]

    initializeSwiper({
        slidesPerView: 4.5,
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

.info-dialog-wrapper {
    position: relative;
    height: 100%;
}

.info-dialog {
    &__title {
        margin-top: 20px;
        text-align: center;
        margin-bottom: 30px;
    }

    &__text {
        text-align: center;
        font-weight: 300;
        color: rgb(221, 221, 221);
        margin-bottom: 50px;
    }
}

.info-dialog-categories {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
}
</style>