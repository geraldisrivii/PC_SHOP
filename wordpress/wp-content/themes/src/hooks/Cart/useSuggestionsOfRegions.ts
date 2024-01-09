import { DadataResponse } from "@/types/ThirdPartyApi"
import { ref, watch } from "vue"
import { getSuggestions } from '@/api/ThirdParty/getSuggestions'


export const useSuggestionsOfRegions = () => {

    const regions = ref([])

    let choosenRegions = ref([])

    const regionsSearchValue = ref('')

    watch(regionsSearchValue, async () => {

        const response = await getSuggestions(regionsSearchValue.value, {
            count: 5,
            from_bound: { value: 'region' },
            to_bound: { value: 'region' }
        })

        regions.value = (response.data as DadataResponse).suggestions.map((suggestion, index) => {
            return {
                label: suggestion.value,
                value: suggestion.data.region
            }
        })
    })

    return {
        regions,
        regionsSearchValue,
        choosenRegions
    }
}