import Store, { Mutations } from '@/store';
import { WritableComputedRef, computed } from 'vue';
import { Settings } from '../../types/App';

export const useAppSettings = (store: typeof Store) => {
    
    let app: WritableComputedRef<Object> = computed({
        get: () => store.state.app.cfs,
        set: (value: Settings) => store.commit(Mutations.SET_APP_SETTINGS, value),
    })

    return {
        app
    }

}