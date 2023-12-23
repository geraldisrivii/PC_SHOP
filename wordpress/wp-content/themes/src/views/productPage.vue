<template>
    <main v-if="isPageDataLoaded">
        <firstSection :product="product" @load="loader.load()" />
        <SecondSection :product="product" />
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
import { Ref, ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { IGrouppedProduct } from '@/types/Product';
import SecondSection from '@/sections/productPage/second-section.vue';

let isPageDataLoaded: Ref<boolean> = ref(false)
const route = useRoute();
declare var preloaderClose: () => void;



let { loader } = useLoad(1)

const product: Ref<IGrouppedProduct | null> = ref(null)

loader.value.onAllisLoaded = () => {
    preloaderClose();
}

onBeforeMount(async () => {
    let { page } = usePageSettings(store)
    page.value = await getPageSettings(258) // страница продукта


    product.value = (await WOO.get('products', {
        params: {
            slug: route.params.product_slug
        }
    })).data[0]

    console.log(product.value)
    isPageDataLoaded.value = true
})


</script>

<style lang="scss" scoped></style>