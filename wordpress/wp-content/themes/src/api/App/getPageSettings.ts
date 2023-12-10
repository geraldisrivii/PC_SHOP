import WP from '@/axiosWP'
import { Settings } from '@/types/App'



export const getPageSettings = async (id: number): Promise<Settings> => {
    return await WP.get('pages/' + id).then(response => response.data)
}