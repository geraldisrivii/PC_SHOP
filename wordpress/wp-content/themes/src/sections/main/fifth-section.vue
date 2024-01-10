<template>
    <div class="fifth-section"
        :style="{ 'background': 'url(' + page['fifth-section_background'] + '), no-repeat center / cover' }">
        <div class="container fifth-section-container">
            <div class="fifth-section-description">
                <p class="title fifth-section-description__title">{{ page['fifth-section_title'] }}</p>
                <p class="fifth-section-description__text">{{ page['fifth-section_text'] }}</p>
                <form class="fifth-section-form">
                    <input class="input" type="text" :placeholder="page['fifth-section_name-placeholder']">
                    <input class="input" type="text" :placeholder="page['fifth-section_tel-placeholder']">
                    <button class="fifth-section-form__button button">{{ page['fifth-section_button-text'] }}</button>
                </form>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePageSettings } from '@/hooks/App/usePageSettings';
import { useLoginFields } from '@/hooks/User/useLoginFields';
import { useVuex } from '@/store/useVuex';


const store = useVuex();

const { page } = usePageSettings(store);

const { DataFields, isntValidFields, ValidFields, validData, isValidAll } = useLoginFields();

</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';


.fifth-section {}

.fifth-section-container {
    padding-top: 135px;
    padding-bottom: 105px;
}

.fifth-section-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 600px;

    &__title {}

    &__text {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 54px;
    }
}

.fifth-section-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 33px;
    align-items: stretch;

    &__button {
        width: fit-content;
    }
}
</style>