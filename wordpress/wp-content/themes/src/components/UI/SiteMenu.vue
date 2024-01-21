<template>
    <ul class="site-menu" :class="{'site-menu_mobile': isMobile}">
        <li class="site-menu__item">
            <button @click=" $router.push({ name: 'katalog', params: { category: 'gaming' } })" class="site-menu__button">
                Игровые ПК
            </button>
        </li>
        <li class="site-menu__item">
            <button @click=" $router.push({ name: 'katalog', params: { category: 'workstation' } })"
                class="site-menu__button">
                Рабочие станции
            </button>
        </li>
        <!-- <li class="site-menu__item">
            <button @click=" $router.push({ name: 'katalog', params: { category: 'laptop' } })" class="site-menu__button">
                Игровые ноутбуки
            </button>
        </li> -->
        <li class="site-menu__item">
            <button @click=" $router.push({
                name: 'configurator', params: {
                    product: 'new'
                }
            })" class="site-menu__button">
                Конфигуратор
            </button>
        </li>
    </ul>
</template>

<script setup lang="ts">

interface Props {
    isMobile?: boolean
}

const { isMobile = false } = defineProps<Props>()

</script>

<style lang="scss" scoped>
.site-menu {
    display: flex;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;

    &__item {}

    &__button {
        text-transform: uppercase;
        font-weight: 500;
        color: white;
    }

    &_mobile {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        justify-content: center;
    }
}
</style>