<template>
    <div class="second-section">
        <div class="filters-box">
            <template v-if="isDataLoaded">
                <CustomSelect @update:chosen-delete="eliminate(chosenFilters.producer_cpu, $event)"
                    @update:chosen-add="chosenFilters.producer_cpu.push($event)" :title="'Производитель процессора'"
                    :list="filters.producer_cpu" :chosen="chosenFilters.producer_cpu" :labelName="'name'" />
                <CustomSelect @update:chosen-delete="eliminate(chosenFilters.socket_cpu, $event)"
                    @update:chosen-add="chosenFilters.socket_cpu.push($event)" :title="'Сокет процессора'"
                    :list="filters.socket_cpu" :chosen="chosenFilters.socket_cpu" :labelName="'name'"
                    :matching-rules="[{ key: 'producer', type: 'matching', value: chosenFilters.producer_cpu, compareKey: 'name' }]" />
                <CustomSelect @update:chosen-delete="eliminate(chosenFilters.model_cpu, $event)"
                    @update:chosen-add="chosenFilters.model_cpu.push($event)" :title="'Модель процессора'"
                    :matching-rules="[
                        { key: 'producer', type: 'matching', value: chosenFilters.producer_cpu, compareKey: 'name' },
                        { key: 'socket', type: 'matching', value: chosenFilters.socket_cpu, compareKey: 'name' },
                    ]"
                    :list="filters.model_cpu" :chosen="chosenFilters.model_cpu" />

                <CustomSelect @update:chosen-delete="eliminate(chosenFilters.producer_gpu, $event)"
                    @update:chosen-add="chosenFilters.producer_gpu.push($event)" :title="'Производитель видеокарты'"
                    :list="filters.producer_gpu" :chosen="chosenFilters.producer_gpu" :labelName="'name'" />

                <CustomSelect @update:chosen-delete="eliminate(chosenFilters.model_gpu, $event)"
                    @update:chosen-add="chosenFilters.model_gpu.push($event)" :title="'Модель видеокарты'"
                    :list="filters.model_gpu" :chosen="chosenFilters.model_gpu"
                    :matching-rules="[{ key: 'producer', type: 'matching', value: chosenFilters.producer_gpu, compareKey: 'name' }]" />
            </template>
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
import { IParams, getProducts } from '@/api/Katalog/getProducts';

import { eliminate } from '@/helpers';
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useVuex } from '@/store/useVuex';
import { usePageSettings } from '@/hooks/App/usePageSettings';

interface IFilters {
    producer_cpu: Array<any>,
    socket_cpu: Array<any>,
    model_cpu: Array<any>,
    producer_gpu: Array<any>,
    model_gpu: Array<any>,
}

const chosenFilters: Ref<IFilters> = ref({
    producer_cpu: [],
    socket_cpu: [],
    model_cpu: [],
    producer_gpu: [],
    model_gpu: [],
})

const getRequestParams = (): IParams => {
    return {
        // cpu_socket: ['lga1700', 'am4']
    }
}

const filters: Ref<IFilters> = ref({
    producer_cpu: [],
    socket_cpu: [],
    model_cpu: [],
    producer_gpu: [],
    model_gpu: [],
})


const route = useRoute();

const store = useVuex();

const { page } = usePageSettings(store);

let isDataLoaded: Ref<boolean> = ref(false)

let products: Ref<Array<IGrouppedProduct>> = ref([])

onBeforeMount(async () => {
    filters.value.producer_cpu = page.value['filters_cpu-producer'];
    filters.value.model_cpu = await getProducts(10, 21);
    filters.value.socket_cpu = page.value['filters_cpu-socket']
    filters.value.producer_gpu = page.value['filters_gpu-producer']

    filters.value.model_gpu = await getProducts(10, 20);

    filters.value.model_cpu.forEach(item => {
        item.label = item.cfs.shortly_name
        item.producer = item.cfs.producer
        item.socket = item.cfs.properties.find(item => item.key[0].slug = 'cpu_socket')?.value
    })

    filters.value.model_gpu.forEach(item => {
        item.label = item.cfs.shortly_name
        item.producer = item.cfs.producer
    })

    console.log(filters.value)

    products.value = await getProducts(4, 16, getRequestParams())
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
    height: fit-content;

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