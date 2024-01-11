<template>
    <main v-if="isPageDataLoaded">
        <FirstSection/>
    </main>
</template>

<script setup lang="ts">
import FirstSection from '@/sections/configurator/first-section.vue'
import { getPageSettings } from '@/api/App/getPageSettings';
import { useLoad } from '@/hooks/App/useLoad';
import { usePageSettings } from '@/hooks/App/usePageSettings';
import store from '@/store';
import { onMounted, ref } from 'vue';

const isPageDataLoaded = ref(false)

let { loader } = useLoad(2)

declare var preloaderClose: () => void;

loader.value.onAllisLoaded = () => {
    preloaderClose()
    loader.value.restart()
}


let { page } = usePageSettings(store)

onMounted(async () => {
    page.value = await getPageSettings(331)

    isPageDataLoaded.value = true

    preloaderClose()
})

</script>

<style lang="scss" scoped></style>