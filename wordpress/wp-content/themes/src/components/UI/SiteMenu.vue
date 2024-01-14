<template>
    <ul class="site-menu">
        <li class="site-menu__item">
            <button @click=" $router.push({ name: 'katalog', params: { category: 'gaming' } })" class="site-menu__button">
                Игровые ПК
            </button>
        </li>
        <li class="site-menu__item">
            <button @click=" $router.push({ name: 'katalog', params: { category: 'workstation' } })" class="site-menu__button">
                Рабочие станции
            </button>
        </li>
        <li class="site-menu__item">
            <button @click=" $router.push({ name: 'katalog', params: { category: 'laptop' } })" class="site-menu__button">
                Игровые ноутбуки
            </button>
        </li>
        <li class="site-menu__item">
            <button @click=" $router.push({ name: 'configurator', params: {
                product: 'new'
            } })" class="site-menu__button">
                Конфигуратор
            </button>
        </li>
    </ul>
</template>

<script setup lang="ts">

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
}
</style>