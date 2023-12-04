
<template>
    <main v-if="isPageDataLoaded">
        <FirstSection />
        <SecondSection />
    </main>
</template>

<script setup lang="ts">
import { getPageSettings } from '@/api/App/getPageSettings';
import { usePageSettings } from '@/hooks/App/usePageSettings';
import FirstSection from '@/sections/katalog/first-section.vue';
import SecondSection from '@/sections/katalog/second-section.vue';
import { useVuex } from '@/store/useVuex';
import { Ref, onMounted, ref } from 'vue';

let isPageDataLoaded: Ref<boolean> = ref(false)

declare var preloaderClose: () => void;

const store = useVuex()

let { page } = usePageSettings(store)

onMounted(async () => {

    page.value = await getPageSettings(190) // katalog post id

    isPageDataLoaded.value = true

    preloaderClose();
})

</script>

<style lang="scss" scoped></style>