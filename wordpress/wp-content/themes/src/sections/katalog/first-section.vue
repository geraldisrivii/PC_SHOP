<template>
    <div class="first-section">

    </div>
</template>

<script setup lang="ts">

import { usePageSettings } from '@/hooks/App/usePageSettings';
import { useVuex } from '@/store/useVuex';
import { IFirstSectionSettings } from '@/types/Katalog';
import { Ref, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const store = useVuex()

let { page } = usePageSettings(store)

const settings = ref(page.value['first-section-settings']) as Ref<IFirstSectionSettings[]>

const currentSettings = settings.value.find(item => item.category[0].slug == route.params.category)


console.log(currentSettings);
</script>

<style lang="scss" scoped></style>