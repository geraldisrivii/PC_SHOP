<template>
    <main v-if="isPageDataLoaded">
        <firstSection @load="loader.load()" />
        <SecondSection />
        <ThirdSection />
    </main>
</template>

<script setup lang="ts">
import { useLoad } from '@/hooks/App/useLoad';

import WP from '@/axiosWP'
import WOO from '@/axiosWoocomerce'
import store from '@/store';
import firstSection from '@/sections/productPage/first-section.vue';

import { getPageSettings } from '@/api/App/getPageSettings';
import { usePageSettings } from '@/hooks/App/usePageSettings';
import { Ref, ref, onBeforeMount, watch } from 'vue';
import { useRoute } from 'vue-router';
import { IGrouppedProduct } from '@/types/Product';
import SecondSection from '@/sections/productPage/second-section.vue';
import ThirdSection from '@/sections/productPage/third-section.vue';
import { getProducts } from '@/api/Katalog/getProducts';
import { useCurrentProduct } from '@/hooks/Product/useCurrentProduct';

let isPageDataLoaded: Ref<boolean> = ref(false)
const route = useRoute();
declare var preloaderClose: () => void;



let { loader } = useLoad(1)


const { product } = useCurrentProduct()

declare var preloaderOpen: () => void;

const isFirstSectionImageLoaded: Ref<boolean> = ref(false)

watch(route, async () => {
    preloaderOpen();
    await getProduct()
}, { deep: true })

loader.value.onAllisLoaded = () => {
    preloaderClose();
    loader.value.restart()
}

const getProduct = async () => {
    product.value = (await WOO.get('products', {
        params: {
            slug: route.params.product_slug,
            full: true
        }
    })).data[0]
}

onBeforeMount(async () => {
    let { page } = usePageSettings(store)
    page.value = await getPageSettings(258) // страница продукта


    await getProduct()

    isPageDataLoaded.value = true
})


</script>

<style lang="scss" scoped></style>