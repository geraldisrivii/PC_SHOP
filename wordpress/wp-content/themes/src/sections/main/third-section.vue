<template>
    <div class="third-section"
        :style="{ background: `url('${page['third-section_background']}'), no-repeat center / cover` }">

        <div class="container">
            <div class="third-section-description">
                <p class="third-section-description__title title">{{ page['third-section_title'] }}</p>
                <p class="third-section-description__text">{{ page['third-section_text'] }}</p>
                <button @click="onClick" class="button">{{ page['third-section_button-text'] }}</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePageSettings } from '@/hooks/App/usePageSettings';
import { useVuex } from '@/store/useVuex';

const store = useVuex();

const { page } = usePageSettings(store);


const onClick = () => {
    window.location.href = 'https://vk.com/'
}

</script>

<style lang="scss" scoped>

@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';
.third-section {
    height: 600px;
    // margin-bottom: 120px;

    @include table{
        height: auto;
        background: rgb(20, 20, 20) !important;
    }
}

.third-section-description {
    padding-top: 230px;
    padding-bottom: 110px;
    max-width: 600px;

    @include table{
        padding-top: 110px;
        padding-bottom: 70px;
        align-items: center;
        text-align: center;
        max-width: none;
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
    }

    margin: 0 0 0 auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;


    &__title {
        margin-bottom: 21px;
    }

    &__text {
        margin-bottom: 50px;
    }
}
</style>