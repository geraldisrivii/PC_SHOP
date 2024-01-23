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
                        <Preloader ref="preloader" />
                        <GoodItem v-for="product in products" :key="product.id" :chosen-category="choosenCategory"
                            v-model:configure-product="ConfigureProduct" :product="product" />
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
                                Итого: {{ totalPrice }} ₽
                            </p>
                            <button @click="onCartButtonClick" :disabled="!isAllGroupsFilled" class="button">
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
                <my-dialog v-model:isDialogShow="isNameDialogShow">
                    <form @submit.prevent="createCustomProduct" class="name-dialog-form">
                        <p class="name-dialog-form__title title">Имя конфигурации</p>
                        <div class="name-dialog-form__inputs">
                            <input v-model="name" type="text" class="name-dialog-form__input input" placeholder="Название">
                            <button :disabled="!name" class="button">Сохранить</button>
                        </div>
                    </form>
                </my-dialog>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import MissingCategoriesGroup from '../../components/MissingCategoriesGroup.vue'
import { Ref, computed, onMounted, ref, watch } from 'vue';
import WOO from '@/axiosWoocomerce'
import { IGrouppedProduct, IProduct, IProductCategoryResponse } from '@/types/Product';

import GoodItem from '@/components/GoodItem.vue';
import { useSwiper } from '@/hooks/Libs/useSwiper'
import { getCategories } from '@/api/Katalog/getCategories';
import { getProducts } from '@/api/Katalog/getProducts';
import { useConfigureProduct } from '@/hooks/Configurator/useConfigureProduct'
import ConfiguratorCategory from '@/components/ConfiguratorCategory.vue';
import { useConfiguratorCategories } from '@/hooks/Configurator/useConfiguratorCategories';
import { useConfiguratorProducts } from '@/hooks/Configurator/useConfiguratorProducts';
import { useCartButtonsActions } from '@/hooks/Cart/useCartButtonsActions';
import { useBasketItems } from '@/hooks/Product/useBasketItems';
import { useVuex } from '@/store/useVuex';
import Preloader from '@/components/Preloader.vue';

interface Props {
    product: IGrouppedProduct | null
}

const { product } = defineProps<Props>()

const { swiperContainer, initializeSwiper } = useSwiper()

const { ConfigureProduct, isAllGroupsFilled, missingGroups, totalPrice } = useConfigureProduct()

const { categories, choosenCategory } = useConfiguratorCategories()

const filters = computed(() => {

    const allProductsFilters = Object.values(ConfigureProduct.value).filter(item => item).map((product: IProduct) => {
        return product.cfs.filters
    }).flat()

    return allProductsFilters.filter(item => item.link[0].slug == choosenCategory.value.slug)
})

const { products, isProductsLoaded } = useConfiguratorProducts(choosenCategory, filters)

const preloader: Ref<InstanceType<typeof Preloader> | null> = ref(null)

watch(isProductsLoaded, () => {
    if (!isProductsLoaded.value) {
        return preloader.value.open()
    }
    setTimeout(() => preloader.value.close(), 200)
})


const isInfoDialogShow = ref(false)

const openInfoDialog = () => {
    if (!isAllGroupsFilled.value) {
        isInfoDialogShow.value = true
    }
}

const setDefaultValuesToConfigureObject = () => {
    if (product) {
        for (const key in ConfigureProduct.value) {
            ConfigureProduct.value[key] = product.grouped_products.find(item => item.categories.find(category => category.slug === key))
        }
    }
}

const store = useVuex()

const { basketItems } = useBasketItems(store)

const { addToCart } = useCartButtonsActions(basketItems)

const createCustomProduct = async () => {
    const data = {
        name: name.value,
        items: Object.values(ConfigureProduct.value).filter(item => item).map((product: IProduct) => {
            return product.id
        }),
    }

    data['imageID'] = (ConfigureProduct.value.case.images[0].id)

    const response = await WOO.post('products/customs', data)

    if (response.status === 201) {
        name.value = ''
        isNameDialogShow.value = false

        addToCart(response.data)
    }
}

const name: Ref<string> = ref('')
const isNameDialogShow: Ref<boolean> = ref(false)

const onCartButtonClick = () => {
    isNameDialogShow.value = true
}

onMounted(async () => {
    categories.value = await getCategories({
        per_page: 100,
        parent: 19,
        order: 'desc',
    })

    choosenCategory.value = categories.value[0]

    setDefaultValuesToConfigureObject()

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

.swiper-slide{
    // width: 250px;
}


.first-section-wrapper {
    padding-top: 100px;
}

.swiper-wrapper {
    // align-items: stretch !important;
    display: flex;
    // gap: 30px;
    width: 100%;
}

.first-section-products-container {
    display: grid;
    // grid-template-columns: 4.6fr 2fr;
    @include table{
        grid-template-columns: 1fr;
    }
    gap: 30px;
    margin-bottom: 40px;
}

.first-section-goods {
    position: relative;
    display: flex;
    flex-direction: column;
    @include table{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    height: auto;
    max-height: 600px;
    // height: 600px;
    overflow-y: scroll;
    gap: 10px;
}

.first-section-filters {
    @include table{
        display: none;
    }
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

.name-dialog-form {
    display: flex;
    flex-direction: column;
    padding: 15px;
    // gap: 40px;
    text-align: center;

    &__title {
        margin-bottom: 35px;
    }

    &__input {}

    &__inputs {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}
</style>