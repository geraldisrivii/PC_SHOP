import { Ref, ref } from 'vue';
import { Resolutions } from '@/types/Stats';
import WP from '@/axiosWP'

export const useResolutions = () => {

    let resolutions:Ref<Resolutions[]> = ref([])

    const onMountedAction = async () => {
        resolutions.value = (await WP.get('resolutions')).data
    }

    return {
        resolutions,
        onMountedAction
    }
}