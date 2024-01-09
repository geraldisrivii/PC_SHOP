import { DadataResponse, DadataResponseFio } from "@/types/ThirdPartyApi"
import { Ref, ref, watch } from "vue"
import { getNameSuggestions } from '@/api/ThirdParty/getNameSuggestions'


export const useSuggestionsOfName = () => {

    const names = ref([])

    let choosenNames = ref([])

    const serchOfNames = ref('')

    watch(serchOfNames, async () => {
        const response = await getNameSuggestions(serchOfNames.value, {
            count: 5,
            parts: ['NAME']
        })

        names.value = (response.data as DadataResponseFio).suggestions.map((suggestion, index) => {
            return {
                label: suggestion.value,
                value: index.toString()
            }
        })

        console.log(names.value)
    })

    return {
        names,
        serchOfNames,
        choosenNames
    }
}