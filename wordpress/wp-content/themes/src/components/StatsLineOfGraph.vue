<template>
    <div class="line-of-graph" :style="{
        height: height.toString() + '%',
    }">
        <p class="line-of-graph__text">{{ value }}</p>
        <div class="line-of-graph__box" :style="{
            backgroundColor: color
        }"></div>
    </div>
</template>

<script setup lang="ts">
import { StatsLineGraphProps } from '@/types/Stats';


const { height, value, color } = defineProps<StatsLineGraphProps>()

</script>

<style lang="scss" scoped>

.line-of-graph {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: fit-content;
    align-items: center;
    &__text {
        text-align: center;
    }
    &__box {
        width: 29px;
        height: 100%;
    }
}
</style>