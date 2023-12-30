<template>
    <div class="assign">
        <div class="assign__box" :style="{ 'backgroundColor': color }"></div>
        <p class="assign__title">{{ title }}</p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    color: string;
    title: string;
}

const { title, color } = defineProps<Props>()

</script>

<style lang="scss" scoped>
.assign {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    &__box {
        width: 25px;
        height: 25px;
    }

    &__title {
        font-weight: 300;
        font-size: 16px;
        text-transform: uppercase;
    }
}
</style>