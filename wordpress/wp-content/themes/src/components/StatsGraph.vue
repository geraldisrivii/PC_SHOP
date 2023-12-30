<template>
    <div class="graph">
        <div class="stats-box">
            <StatsLineOfGraph v-for="(item, index) in valuesWithHeight" :key="index" :value="item.value"
                :height="item.height" :color="item.color" />
        </div>
        <div class="graph__description">
            {{ name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { StatsGraphValues, StatsLineGraphProps } from '@/types/Stats';
import StatsLineOfGraph from './StatsLineOfGraph.vue';
import { computed } from 'vue';



interface Props {
    values: StatsGraphValues[];
    name: string;
}

const { values, name } = defineProps<Props>()

const valuesWithHeight = computed(() => {

    let maxValuesValue = 0;
    let maxValueItem: StatsGraphValues

    values.forEach(item => {
        if (item.value > maxValuesValue) maxValueItem = item; maxValuesValue = item.value
    })

    console.log(maxValueItem)

    return values.map(item => {
        item['height'] = (item.value / maxValueItem.value) * 100
        return item;
    });
})

console.log(valuesWithHeight.value)

</script>

<style lang="scss" scoped>
.stats-box {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 15px;
}

.graph {
    height: 100%;
    // width: 100%;
    display: flex;
    width: min-content;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    
    &__description{
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        height: 80px;
        text-transform: uppercase;
    }
}
</style>