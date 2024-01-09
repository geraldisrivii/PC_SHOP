import { DadataResponse } from "@/types/ThirdPartyApi"
import { Ref, ref, watch } from "vue"
import { getSuggestions } from '@/api/ThirdParty/getSuggestions'


export const useSugguestionsOfAddress = (choosenRegions: Ref<object[]>, valueName: string) => {

    const addreses = ref([])

    let choosenAddress = ref([])

    const addresesSearchValue = ref('')

    watch(addresesSearchValue, async () => {

        // console.log(choosenRegions.value.map(item => item[valueName]))
        console.log(choosenRegions.value)

        const response = await getSuggestions(addresesSearchValue.value, {
            query: addresesSearchValue.value,
            count: 5,
            locations: choosenRegions.value.map(item => {
                return {'region': item[valueName]}
            })
        })

        addreses.value = (response.data as DadataResponse).suggestions.map((suggestion, index) => {
            return {
                label: suggestion.value,
                value: index.toString()
            }
        })
    })

    return {
        addreses,
        addresesSearchValue,
        choosenAddress
    }
}