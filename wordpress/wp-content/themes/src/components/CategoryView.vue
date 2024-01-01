<template>
    <div @click="$router.push({name: 'katalog', params: {category: slug}})" class="category-view">
        <div class="category-view__image-box">
            <img class="category-view__image" :src="imageSrc" alt="">
        </div>
        <div class="category-view__description-box">
            <p class="category-view__title">{{ title }}</p>
            <p class="category-view__price">от {{ price }} {{ currency }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">

interface Props {
    imageSrc: string,
    title: string,
    price: string | number,
    currency: string;
    slug: string;
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.category-view {
    background-color: #141414;
    padding: 15px;
    border-radius: 5px;

    transition: all .3s;
    
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 10px #ffffff;
    }

    &__image-box {
        width: 100%;
        height: 280px;
        margin-bottom: 20px;
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    &__description-box {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 15px;
    }

    &__title {
        color: #FFF;
        font-family: Rubik;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 0.88px;
        text-transform: uppercase;
    }

    &__price {
        color: #FFF;
        font-family: Rubik;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: 0.72px;
        text-transform: uppercase;
    }
}
</style>