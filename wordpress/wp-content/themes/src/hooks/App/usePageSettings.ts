import Store, { Mutations } from '@/store';
import { WritableComputedRef, computed } from 'vue';
import { ICategoryMainPage, Settings } from '@/types/App';


export const usePageSettings = (store: typeof Store) => {

    let page: WritableComputedRef<Object> = computed({
        get: () => store.state.page.cfs,
        set: (value: Settings) => store.commit(Mutations.SET_PAGE_SETTINGS, value),
    })

    return {
        page
    }

}