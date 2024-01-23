import { getProducts } from "@/api/Katalog/getProducts"
import { IGrouppedProduct, ISeriesProducts } from "@/types/Product"
import { Ref, computed, ref } from "vue"
import WP from '@/axiosWP'

export const useProducts = () => {

    let serieses: Ref<Array<{ slug: string, name: string }>> = ref([])

    let products: Ref<ISeriesProducts> = ref({})

    const productsLoadedInfo = ref([])

    const category_ids = {
        laptop: 18,
        gaming: 16,
        workstation: 17
    }

    const onMountedAction = async (category_slug: string) => {

        productsLoadedInfo.value = []
        
        serieses.value = (await WP.get('series')).data

        serieses.value = serieses.value.filter(item => item.slug.includes(category_slug))

        products.value = serieses.value.map(item => {
            return {
                [item.slug]: []
            }
        }).reduce((acc, item) => {
            return {
                ...acc,
                ...item
            }
        }, {})

        
        for (const key in products.value) {
            getProducts({
                category: category_ids[category_slug],
                per_page: 20,
                series: key
            }).then(data => {
                products.value[key] = data
                productsLoadedInfo.value.push(key)
            })

        }

    }

    const hasLoadedOneProduct = computed(() => {
        return productsLoadedInfo.value.length > 0
    })

    return {
        serieses,
        products,
        onMountedAction,
        hasLoadedOneProduct,
        productsLoadedInfo
    }
}