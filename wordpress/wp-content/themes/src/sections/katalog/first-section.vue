<template>
    <div ref="box" class="first-section"
        :style="{ background: `url('${currentSettings.background}'), no-repeat center / cover` }">
        <div class="first-section-container container">
            <div class="image-box">
                <img ref="image" :src="currentSettings.image" :alt="currentSettings.title">
            </div>
            <div class="description-box">
                <p class="description-box__title title">{{ currentSettings.title }}</p>
                <p class="description-box__text">{{ currentSettings.text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useLoad } from '@/hooks/App/useLoad';
import { usePageSettings } from '@/hooks/App/usePageSettings';
import { useVuex } from '@/store/useVuex';
import { IFirstSectionSettings } from '@/types/Katalog';
import { Ref, computed, onMounted, onUpdated, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import imagesLoaded from 'imagesloaded';

const emit = defineEmits<{
    (e: 'load'): void
}>()

const route = useRoute();

const store = useVuex()

let { page } = usePageSettings(store)

const settings = ref(page.value['first-section-settings']) as Ref<IFirstSectionSettings[]>

const currentSettings = computed(() => settings.value.find(item => item.category[0].slug == route.params.category))




// refs
const box: Ref<HTMLElement | null> = ref(null)
const image: Ref<HTMLElement | null> = ref(null)

let { loader } = useLoad(1)



loader.value.onAllisLoaded = () => {
    emit('load')
    loader.value.restart()
}

watch(route, async () => {
    imagesLoaded(box.value, () => {
        loader.value.load()
    })
}, { deep: true })

onMounted(async () => {
    imagesLoaded(box.value, () => {
        loader.value.load()
    })
})
</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.first-section {
    overflow: hidden;
}

.first-section-container {
    // max-width: 1600px;
    // margin: 0 auto;
    // padding: 0 40px;
    padding-top: 150px;

    display: grid;
    grid-template-columns: 8fr 6fr;

    @include table {
        grid-template-columns: 1fr;
        padding-top: 90px;
        gap: 0px;
    }

    gap: 80px;
}

.image-box {
    position: relative;
    top: 10px;
    width: 100%;

    @include table {
        top: 15px;
    }

    img {
        width: 100%;

    }
}

.description-box {

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @include table {
        margin-bottom: 40px;
        background-color: rgb(15, 15, 15);
        padding: 10px;
        padding-top: 30px;
        border-radius: 5px;
        z-index: 1;
    }

    &__title {
        margin-bottom: 35px;
    }

    &__text {}
}
</style>