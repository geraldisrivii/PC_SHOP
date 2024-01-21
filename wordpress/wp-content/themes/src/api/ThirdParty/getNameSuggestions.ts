import axios from 'axios'

export const getNameSuggestions = async (query: string, params: object) => {
    const token = 'cda2cb52dab49ac2264e31f11ca49944c1ac8c9b'
    
    return await axios.post('http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio', {
        query: query,
        ...params
    }, {
        headers: {
            Authorization: `Token ${token}`,
        }
    })
}