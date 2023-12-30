
<template>
    <main v-if="isPageDataLoaded">
        <FirstSection :key="1" @load="loader.load()" />
        <SecondSection :key="2" @load="loader.load()" />
    </main>
</template>

<script setup lang="ts">
import { getPageSettings } from '@/api/App/getPageSettings';
import { useLoad } from '@/hooks/App/useLoad';
import { usePageSettings } from '@/hooks/App/usePageSettings';
import FirstSection from '@/sections/katalog/first-section.vue';
import SecondSection from '@/sections/katalog/second-section.vue';
import { useVuex } from '@/store/useVuex';
import { Ref, onMounted, ref } from 'vue';

let isPageDataLoaded: Ref<boolean> = ref(false)

declare var preloaderClose: () => void;

const store = useVuex()

let { loader } = useLoad(2)

loader.value.onAllisLoaded = () => {
    preloaderClose()
    loader.value.restart()
}

let { page } = usePageSettings(store)

onMounted(async () => {
    page.value = await getPageSettings(190) // katalog post id

    isPageDataLoaded.value = true

    // preloaderClose();
})

</script>

<style lang="scss" scoped></style>