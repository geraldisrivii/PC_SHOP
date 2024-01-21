import { Ref, computed, ref } from "vue";
import { IConfigureProduct } from "@/types/Configurator";
import { IConfigureGroupe, IProduct } from "@/types/Product";



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

    const configureGroupes: IConfigureGroupe[] = [
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

        return result
    })

    const isAllGroupsFilled = computed(() => {
        return missingGroups.value.length === 0
    })

    const totalPrice = computed(() => {
        let result = 0

        let products = (Object.values(ConfigureProduct.value) as IProduct[]).filter(product => product)
        
        products.forEach(product => {
            result += Number(product.price)
        })

        return result
    })

    return {
        ConfigureProduct,
        missingGroups,
        isAllGroupsFilled,
        totalPrice
    }

}