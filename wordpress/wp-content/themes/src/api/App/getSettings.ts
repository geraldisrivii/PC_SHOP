import WP from '@/axiosWP'
import { Settings } from '@/types/App'



export const getSettings = async (): Promise<Settings> => {
    return await WP.get('settings').then(response => response.data)
}