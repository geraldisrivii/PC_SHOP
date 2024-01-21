import { IProductCategoryResponse } from "@/types/Product"
import { Ref, ref } from "vue"


export const useConfiguratorCategories = () => {

    const categories: Ref<Array<IProductCategoryResponse>> = ref([])

    const choosenCategory: Ref<IProductCategoryResponse | null> = ref(null)

    return {
        categories,
        choosenCategory
    }

}