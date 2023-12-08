<template>
    <div class="second-section">
        <div class="filters-box">
            <CustomSelect @update:chosen-delete="eliminate(chosenFilters.producer_cpu, $event)"
                @update:chosen-add="chosenFilters.producer_cpu.push($event)" :title="'Производитель процессора'"
                :list="filters.producer_cpu" :chosen="chosenFilters.producer_cpu" />
            <CustomSelect @update:chosen-delete="eliminate(chosenFilters.model_cpu, $event)"
                @update:chosen-add="chosenFilters.model_cpu.push($event)" :title="'Модель процессора'"
                :matching-rules="[{ key: 'producer', type: 'matching', value: chosenFilters.producer_cpu, compareKey: 'name' }]"
                :list="filters.model_cpu" :chosen="chosenFilters.model_cpu" />
        </div>
        <div class="products-box">
            <Product v-if="isDataLoaded" v-for="product in products" :key="product.id" :image-src="product.images[0].src"
                :name="product.name" :grouped_products="product.grouped_products" :price="product.price" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Product from '@/components/Product.vue';
import WOO from '@/axiosWoocomerce'
import { Ref, onBeforeMount, onMounted, ref } from 'vue';
import { IGrouppedProduct } from '@/types/Product';
import { useRoute } from 'vue-router';
import CustomSelect from '@/components/CustomSelect.vue';
import { getProducts } from '@/api/Katalog/getProducts';

import { eliminate } from '@/helpers';

const chosenFilters = ref({
    producer_cpu: [],
    model_cpu: [],
})

const filters = ref({
    producer_cpu: [
        {
            name: 'AMD',
            label: 'компания AMD'
        },
        {
            name: 'INTEL',
            label: 'компания INTEL'
        },
    ],
    model_cpu: [
        {
            name: 'i5 1155G7',
            label: 'i5 1155G7',
            producer: 'INTEL',
        },
        {
            name: 'i7 1165G7',
            label: 'i7 1165G7',
            producer: 'INTEL',
        },
        {
            name: 'ryzen 5 5600G',
            label: 'ryzen 5 5600G',
            producer: 'AMD',
        }
    ],
})


const route = useRoute();

let isDataLoaded: Ref<boolean> = ref(false)

let products: Ref<Array<IGrouppedProduct>> = ref([])

onBeforeMount(async () => {
    products.value = await getProducts(4, 16)

    console.log(products.value)

    isDataLoaded.value = true
})

</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.second-section {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 30px;
    padding-top: 56px;
    padding-bottom: 68px;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 1420px;
    margin: 0 auto;
}

.filters-box {
    background-color: #141414;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 10px;
}

.products-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, 310px);
    gap: 20px;

}
</style>