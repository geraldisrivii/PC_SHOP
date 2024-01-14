import { getProducts } from "@/api/Katalog/getProducts"
import { IProductCategoryResponse, IProduct, IProductFilter } from "@/types/Product"
import { Ref, computed, ref, watch } from "vue"


export const useConfiguratorProducts = (choosenCategory: Ref<IProductCategoryResponse>, filters: Ref<IProductFilter[]>) => {
    const products: Ref<Array<IProduct>> = ref([])

    const filtersRequest = computed(() => {
        let requests = {}
        filters.value.forEach(filter => {
            requests[filter.key[0].slug] = {
                value: filter.value,
                type: Object.keys(filter.type)[0],
                kind: Object.keys(filter.kind)[0],
            }
        })

        return requests
    });

    watch(choosenCategory, async () => {
        if (choosenCategory) {
            products.value = await getProducts({
                category: choosenCategory.value.id,
                ...filtersRequest.value
            })
        }
    }, { deep: true })

    return {
        products
    }
}