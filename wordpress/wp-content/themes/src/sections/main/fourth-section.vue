<template>
    <div class="fourth-section"
        :style="{ background: `url('${page['fourth-section_background']}'), no-repeat center / cover` }">
        <div class="container fourth-section-container">
            <p class="fourth-section-container__title title">{{ page['fourth-section_title'] }}</p>
            <p class="fourth-section-container__text">{{ page['fourth-section_text'] }}</p>
            <button @click="$router.push({name: 'configurator', params: {product: 'new'}})" class="button fourth-section-container__button">{{ page['fourth-section_button-text'] }}</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePageSettings } from '@/hooks/App/usePageSettings';
import { useVuex } from '@/store/useVuex';


const store = useVuex();

const { page } = usePageSettings(store);



</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.fourth-section {}

.container {}

.fourth-section-container {
    padding-top: 100px;
    padding-bottom: 100px;
    max-width: 600px;
    text-align: center;

    display: flex;
    flex-direction: column;

    align-items: center;

    &__title {
        margin-bottom: 35px;
    }

    &__text {
        margin-bottom: 50px;
    }

    &__button {}
}

.button {}
</style>