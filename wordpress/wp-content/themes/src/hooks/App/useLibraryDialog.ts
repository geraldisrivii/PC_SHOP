import { Ref, WritableComputedRef, computed, onMounted, ref } from "vue"
import Store, { Mutations, mutations } from '@/store';
import Library from "@/components/Library.vue";

export const useLibraryDialog = (store: typeof Store) => {
    const instance = ref<InstanceType<typeof Library> | null>(null)

    let libraryDialog: WritableComputedRef<InstanceType<typeof Library>> = computed(() => store.state.library_dialog)

    return {
        instance,
        libraryDialog
    }
}