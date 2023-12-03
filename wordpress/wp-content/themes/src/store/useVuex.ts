import State from '@/store';
import { ref, Ref } from 'vue';
import { useStore } from 'vuex';

function useVuex(): typeof State {
    return useStore() as typeof State
}

function useVuexWithRef(): Ref<typeof State> {
    return ref(useStore()) as Ref<typeof State>
}



export { useVuex, useVuexWithRef }