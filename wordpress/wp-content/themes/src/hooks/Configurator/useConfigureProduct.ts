import { Ref, computed, ref } from "vue";
import { IConfigureProduct } from "@/types/Configurator";


export const useConfigureProduct = () => {

    const ConfigureProduct: Ref<IConfigureProduct> = ref({
        cpu: null,
        gpu: null,
        ram: null,
        motherboard: null,
        ssd: null,
        hdd: null,
        case: null,
        pb: null,
        pc_fan: null,
        cpu_cooler: null,
    })

    const configureGroupes = [
        {
            label: 'Процессор',
            includes: ['cpu']
        },
        {
            label: 'Видеокарта',
            includes: ['gpu']
        },
        {
            label: 'Материнская плата',
            includes: ['motherboard']
        },
        {
            label: 'Оперативная память',
            includes: ['ram']
        },
        {
            label: 'Корпус',
            includes: ['case']
        },
        {
            label: 'Кулер',
            includes: ['cpu_cooler']
        },
        {
            label: 'Корпусные вентиляторы',
            includes: ['pc_fan']
        },
        {
            label: 'Диски',
            includes: ['ssd', 'hdd']
        },
        {
            label: 'Блоки питания',
            includes: ['pb']
        }
    ]

    const missingGroups = computed(() => {
        let result = configureGroupes.filter(group => {
            return !(group.includes.some(item => {
                return ConfigureProduct.value[item] !== null
            }))
        })

        console.log(result)
        return result
    })

    const isAllGroupsFilled = computed(() => {
        return missingGroups.value.length === 0
    })

    return {
        ConfigureProduct,
        missingGroups,
        isAllGroupsFilled
    }

}