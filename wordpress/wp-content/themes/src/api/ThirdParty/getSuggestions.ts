import axios from 'axios'

export const getSuggestions = async (query: string, params: object) => {
    const token = 'cda2cb52dab49ac2264e31f11ca49944c1ac8c9b'

    let response = await axios.post('http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
        query: query,
        ...params
    }, { headers: { Authorization: 'Token ' + token } })

    return response;
}