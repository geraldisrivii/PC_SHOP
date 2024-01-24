<template>
    <main v-if="isPageDataLoaded">
        <FirstSection :product="product" />
    </main>
</template>

<script setup lang="ts">
import FirstSection from '@/sections/configurator/first-section.vue'
import { getPageSettings } from '@/api/App/getPageSettings';
import { useLoad } from '@/hooks/App/useLoad';
import { usePageSettings } from '@/hooks/App/usePageSettings';
import store from '@/store';
import { Ref, onMounted, ref } from 'vue';
import { IGrouppedProduct } from '@/types/Product';
import { useRoute } from 'vue-router';
import { getProducts } from '@/api/Katalog/getProducts';

const isPageDataLoaded = ref(false)

let { loader } = useLoad(2)

declare var preloaderClose: () => void;

loader.value.onAllisLoaded = () => {
    preloaderClose()
    loader.value.restart()
}

const product: Ref<IGrouppedProduct | null> = ref(null)


const { page } = usePageSettings(store)

const route = useRoute()

const setProducts = async () => {
    if (route.params.product != 'new') {
        product.value = (await getProducts({ slug: route.params.product, full: true }))[0]
    }
}

onMounted(async () => {
    page.value = await getPageSettings(331)

    await setProducts()

    isPageDataLoaded.value = true

    preloaderClose()
})

</script>

<style lang="scss" scoped></style>