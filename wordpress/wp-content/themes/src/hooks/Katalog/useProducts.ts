import { getProducts } from "@/api/Katalog/getProducts"
import { IGrouppedProduct, ISeriesProducts } from "@/types/Product"
import { Ref, ref } from "vue"
import WP from '@/axiosWP'

export const useProducts = () => {

    let serieses: Ref<Array<{ slug: string, name: string }>> = ref([])

    let products: Ref<ISeriesProducts> = ref({})

    const category_ids = {
        laptop: 18,
        gaming: 16,
        workstation: 17
    }

    const onMountedAction = async (category_slug: string) => {
        serieses.value = (await WP.get('series')).data

        serieses.value = serieses.value.filter(item => item.slug.includes(category_slug))

        console.log(serieses.value)

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
            products.value[key] = await getProducts(20, category_ids[category_slug], {
                series: key
            })
        }
        
    }

    return {
        serieses,
        products,
        onMountedAction
    }
}