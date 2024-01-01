import { Ref, WritableComputedRef, computed, onMounted, ref } from "vue"
import Store, { Mutations, mutations } from '@/store';
import StatusDialog from "@/components/UI/StatusDialog.vue";

export const useStatusDialog = (store: typeof Store) => {
    const instance = ref<InstanceType<typeof StatusDialog> | null>(null)

    let statusDialog: WritableComputedRef<InstanceType<typeof StatusDialog>> = computed(() => store.state.status_dialog)

    return {
        instance,
        statusDialog
    }
}