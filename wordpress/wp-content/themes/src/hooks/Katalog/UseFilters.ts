import { Ref, WritableComputedRef, computed, ref } from 'vue';
import {IParams, getProducts} from '@/api/Katalog/getProducts';


interface IFilters {
    producer_cpu: Array<any>,
    socket_cpu: Array<any>,
    model_cpu: Array<any>,
    producer_gpu: Array<any>,
    model_gpu: Array<any>,
}


export const UseFilters = (page: WritableComputedRef<Object>) => {
    
    const filters: Ref<IFilters> = ref({
        producer_cpu: [],
        socket_cpu: [],
        model_cpu: [],
        producer_gpu: [],
        model_gpu: [],
    })

    const chosenFilters: Ref<IFilters> = ref({
        producer_cpu: [],
        socket_cpu: [],
        model_cpu: [],
        producer_gpu: [],
        model_gpu: [],
    })

    const getRequestParams = computed((): IParams => {
        return {
            cpu_producer: chosenFilters.value.producer_cpu.map(item => item.name),
            cpu_socket: chosenFilters.value.socket_cpu.map(item => item.name),
            cpu_model: chosenFilters.value.model_cpu.map(item => item.id),
            gpu_producer: chosenFilters.value.producer_gpu.map(item => item.name),
            gpu_model: chosenFilters.value.model_gpu.map(item => item.id),
        }
    })

    const onMountedAction = async () => {
        filters.value.producer_cpu = page.value['filters_cpu-producer'];
        filters.value.model_cpu = await getProducts(10, 21);
        filters.value.socket_cpu = page.value['filters_cpu-socket']
        filters.value.producer_gpu = page.value['filters_gpu-producer']

        filters.value.model_gpu = await getProducts(10, 20);

        filters.value.model_cpu.forEach(item => {
            item.label = item.cfs.shortly_name
            item.producer = item.cfs.producer
            item.socket = item.cfs.properties.find(item => item.key[0].slug = 'cpu_socket')?.value
        })

        filters.value.model_gpu.forEach(item => {
            item.label = item.cfs.shortly_name
            item.producer = item.cfs.producer
        })
    }

    return {
        filters,
        chosenFilters,
        getRequestParams,
        onMountedAction
    }
}