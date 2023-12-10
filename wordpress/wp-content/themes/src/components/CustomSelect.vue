<template>
    <div class="select">
        <button @click="isPanelOpen = !isPanelOpen" class="select__panel">
            <p class="select__title">{{ title }}</p>
            <img :src="app['general_select-icon']" alt="select-icon">
        </button>
        <div class="select__wrapper" :class="{ 'select__wrapper--open': isPanelOpen }">
            <ul class="select__list">
                <li v-for="(item, index) in matchedList" :key="index" class="select__item"
                    :class="{ 'select__item--active': chosen.includes(item) }">
                    <button @click="choice(item)">
                        {{ labelName ? item[labelName] : item['label'] }}
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useVuex } from '@/store/useVuex';
import { IMatchingRule, TypeMatching } from '@/types/Katalog';
import { Ref, computed, ref, watch } from 'vue';

const store = useVuex()

const { app } = useAppSettings(store)

interface Props {
    title: string;
    list: Array<Object>;
    multiple?: boolean;
    labelName?: string;
    valueName?: string;
    labelLevel?: number;
    chosen: Array<Object>;
    matchingRules?: Array<IMatchingRule>
}

const { title, list, multiple, labelName, valueName, labelLevel, chosen, matchingRules } = defineProps<Props>()

const matchedList = computed(() => {
    if (!matchingRules) {
        return list
    }

    return list.filter(item => {
        let matchingCount = 0
        for (const rule of matchingRules) {
            if (rule.value.length == 0) {
                matchingCount++
            }
            let result = rule.value.find(obj => obj[rule.compareKey] == item[rule.key])
            if (rule.type == 'matching' ? result : !result) {
                matchingCount++;
            }
        }
        if (matchingCount == matchingRules.length) {
            return true
        }

        return false;
    })
})

interface Emits {
    (e: 'update:chosen-add', item: object): void
    (e: 'update:chosen-delete', item: object): void
}
const emit = defineEmits<Emits>()

if (matchingRules) {
    watch(matchedList, () => {
        console.log(matchedList.value)
        debugger

        let forDeleteArray = [];
        chosen.forEach(item => {
            if (!matchedList.value.includes(item)) {
                forDeleteArray.push(item)
            }
        })

        forDeleteArray.forEach(item => {
            emit('update:chosen-delete', item)
        })
    }, { deep: true })
}




let isPanelOpen: Ref<boolean> = ref(false)


const choice = (item: object) => {
    if (chosen.includes(item)) {
        emit('update:chosen-delete', item)
        return;
    }
    emit('update:chosen-add', item)
}

</script>

<style lang="scss" scoped>
.select {
    width: 100%;

    &__panel {
        width: 100%;
        padding: 16px 18px;
        background-color: #0C0C0C;
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-radius: 5px;
    }

    &__title {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 400;
        color: #FFF;
    }

    &__list {
        padding: 10px;
        background-color: #121212;
        border-radius: 5px;

        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__item {
        border-radius: 5px;
        padding: 10px;
        text-align: center;
        background-color: #141414;

        button {
            width: 100%;
            height: 100%;
            color: #FFF;
            font-size: 16px;
            font-weight: 500;
            text-transform: uppercase;
        }


        &--active {
            background-color: #343434;
        }
    }

    &__wrapper {
        height: 0px;
        width: 100%;
        transition: all 0.3s;

        overflow: hidden;

        opacity: 0;

        &--open {

            padding-top: 10px;
            padding-bottom: 10px;

            opacity: 1;

            height: unset;
        }
    }
}
</style>