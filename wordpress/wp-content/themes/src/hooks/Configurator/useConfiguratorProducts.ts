import { getProducts } from "@/api/Katalog/getProducts"
import { IProductCategoryResponse, IProduct, IProductFilter } from "@/types/Product"
import { Ref, computed, ref, watch } from "vue"


export const useConfiguratorProducts = (choosenCategory: Ref<IProductCategoryResponse>, filters: Ref<IProductFilter[]>) => {
    const products: Ref<Array<IProduct>> = ref([])

    const isProductsLoaded = ref(false)

    const filtersRequest = computed(() => {
        let requests = []
        filters.value.forEach(filter => {
            requests.push({
                name: filter.key[0].slug,
                value: filter.value,
                type: Object.keys(filter.type)[0],
                kind: Object.keys(filter.kind)[0],
            })
        })

        return requests
    });

    watch(choosenCategory, async () => {
        if (choosenCategory) {
            isProductsLoaded.value = false
            products.value = await getProducts({
                category: choosenCategory.value.id,
                filters: filtersRequest.value
            })
            isProductsLoaded.value = true
        }
    }, { deep: true })

    return {
        products,
        isProductsLoaded
    }
}