<template>
    <div class="select">
        <div @click="onDropdownClick" class="select-panel" :class="{ 'select-panel_searchable': isSearchable }">
            <input @click="onInputClick" :placeholder="placeholder" class="select-panel__input input" v-if="isSearchable" :value="searchValue" @input="emit('update:searchValue', ($event.target as HTMLInputElement).value)" type="text">
            <p v-else class="select-panel__text">{{ choosenOptions.length > 0 ? choosenOptionsLabels.join(', ') :
                placeholder }}
            </p>
        </div>
        <div v-show="isSelectDropdownShow" class="select-dropdown"
            :class="{'select-dropdown--active': isSelectDropdownShow}"
            :style="{ top: isSearchable ? '55' + 'px' : '45' + 'px' }">

            <div @click="isMultiple ? onClick($event, option) : isMultipleOnClick($event, option)"
                class="select-dropdown__item" v-for="(option, index) in isSearchable && searchType == 'regexp' ? outputSearchOptions : options" :key="index"
                :class="{ 'select-dropdown__item--active': choosenOptions.find(item => item[valueName] === option[valueName]) }">
                <p class="select-dropdown__item-text">{{ option[labelName] }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { SearchType } from '@/types/components/mySelect';
import { Ref, computed, ref, toRef, toRefs } from 'vue';


interface Props {
    placeholder: string
    options: object[]
    choosenOptions: object[]
    valueName?: string;
    labelName?: string;
    isMultiple?: boolean;
    isSearchable?: boolean
    searchValue?: string
    searchType?: SearchType
}

const props = defineProps<Props>()

const { options, choosenOptions, searchValue = ref('')} = toRefs(props)

const {

    valueName = 'value',
    labelName = 'label',
    placeholder,
    isMultiple = false,
    isSearchable = false,
    searchType = 'regexp'

} = (props)


const choosenOptionsLabels = computed(() => {
    return choosenOptions.value.map(option => option[labelName])
})

const isSelectDropdownShow = ref(false)

interface Emits {
    (e: 'update:choosenOptions', options: object[]): void
    (e: 'update:searchValue', str: string): void
}

const emit = defineEmits<Emits>()


const onDropdownClick = () => {
    isSelectDropdownShow.value = !isSelectDropdownShow.value
}

const outputSearchOptions = computed(() => {
    let words = searchValue.value.split(' ')
    const regexps: RegExp[] = words.map(word => {
        return new RegExp(word, 'i')
    })

    let filteredOptions = options.value.filter(option => {
        return regexps.every(regexp => regexp.test(option[labelName]))
    })

    console.log(filteredOptions)

    return filteredOptions
})


const onClick = (event: Event, option: object) => {
    let index = choosenOptions.value.findIndex(item => item[valueName] === option[valueName])
    if (index > -1) {
        emit('update:choosenOptions', choosenOptions.value.filter(item => item[valueName] !== option[valueName]))
    } else {
        emit('update:choosenOptions', choosenOptions.value.concat([option]))
    }
}
const isMultipleOnClick = (event: Event, option: object) => {
    emit('update:choosenOptions', [option])
    isSelectDropdownShow.value = false
    emit('update:searchValue', option[labelName])
}

const onInputClick = (event: Event) => {
    if(!isSelectDropdownShow.value){
        (event.target as HTMLInputElement).placeholder = 'Начните вводить...'
    } else {
        (event.target as HTMLInputElement).placeholder = placeholder
    }
}

</script>

<style lang="scss" scoped>
.select {
    position: relative;
}

.select-panel {
    width: 100%;
    padding: 15px 20px;
    background-color: #242424;
    border-radius: 5px;

    &_searchable {
        padding: 0px;
    }

    &__text {
        font-size: 18px;
        text-transform: none;
        font-weight: 400;
    }

    &__input {
        width: 100%;
        background-color: #242424;
        border-radius: 5px;
        color: white;

        &::placeholder{
            font-size: 18px;
            color: white;
            text-transform: none;
            font-weight: 400;
        }
    }
}

.select-dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    padding: 15px 20px;
    background-color: rgb(31, 31, 31);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__item {
        background-color: #242424;
        border-radius: 5px;
        padding: 10px 15px;

        transition: all 0.3s;

        cursor: pointer;

        &:hover {
            background-color: #444444;
        }

        &--active {
            background-color: #444444;
        }
    }

    &--active{
        z-index: 10000;
    }

    &__item-text {
        font-weight: 400;
    }
}
</style>