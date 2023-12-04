<template>
    <footer class="footer">
        <div class="footer-container container">
            <div class="footer-description">
                <ul class="footer-description-socials">
                    <a v-for="(social, index) in socials" :key="index" class="social footer-description-socials__item"
                        :href="social.link">
                        <img class="social__image" :src="social.image" alt="">
                    </a>
                </ul>
                <p class="footer-description__title">{{ app['footer_title'] }}</p>
                <SiteMenu class="footer-description__menu" />
            </div>
            <p class="footer-logo">{{ app['general-logo_text'] }}</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import SiteMenu from '@/components/UI/SiteMenu.vue';
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useVuex } from '@/store/useVuex';
import { ISocials } from '@/types/App';
import { Ref, ref } from 'vue';


const store = useVuex();

const { app } = useAppSettings(store);

const socials: Ref<ISocials[]> = ref(app.value['footer_socials']);

</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.footer-logo {
    position: absolute;
    right: 0;
    top: 20px;

    color: #FFF;
    font-family: Rubik;
    font-size: 300px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    @include table{
        font-size: 250px;
    }

    @include min-table{
        display: none;
    }

}

.footer {}

.footer-container {
    position: relative;
    padding-top: 140px;
    padding-bottom: 30px;
}

.footer-description {
    display: flex;
    flex-direction: column;

    padding: 15px;

    background-color: #131313;
    border-radius: 5px;

    max-width: 600px;

    &__title {
        font-size: 16px;
        text-transform: uppercase;

        margin-bottom: 70px;
    }

    &__menu {
        margin-bottom: 20px;
    }
}

.footer-description-socials {
    display: flex;
    gap: 15px;
    align-items: center;

    margin-bottom: 50px;

    &__item {}
}

.social {
    border: 2px solid white;
    border-radius: 100%;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    &__image {
        width: 65%;
        height: 65%;
    }
}
</style>