
<template>
    <main v-if="isPageDataLoaded">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
    </main>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, Ref } from 'vue';

import WP from '@/axiosWP'
import store from '@/store';
import { getPageSettings } from '@/api/App/getPageSettings';
import { usePageSettings } from '@/hooks/App/usePageSettings';
import FirstSection from '@/sections/main/first-section.vue';
import SecondSection from '@/sections/main/second-section.vue';
import ThirdSection from '@/sections/main/third-section.vue';
import FourthSection from '@/sections/main/fourth-section.vue';
import FifthSection from '@/sections/main/fifth-section.vue';

let isPageDataLoaded: Ref<boolean> = ref(false)

onBeforeMount(async () => {

    let { page } = usePageSettings(store)
    page.value = await getPageSettings(21)

    isPageDataLoaded.value = true
})




</script>

<style lang="scss" scoped></style>