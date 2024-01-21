import SpecDialog from "@/components/SpecDialog.vue"
import { Ref, WritableComputedRef, computed, onMounted, ref } from "vue"
import Store, { Mutations, mutations } from '@/store';

export const useSpecDialog = (store: typeof Store) => {
    const instance = ref<InstanceType<typeof SpecDialog> | null>(null)

    let specDialog: WritableComputedRef<InstanceType<typeof SpecDialog>> = computed(() => store.state.spec_dialog)

    return {
        instance,
        specDialog
    }
}