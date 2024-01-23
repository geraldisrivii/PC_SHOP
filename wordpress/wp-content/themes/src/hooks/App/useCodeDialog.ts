import { Ref, WritableComputedRef, computed, onMounted, ref } from "vue"
import Store, { Mutations, mutations } from '@/store';
import GamburgerDialog from "@/components/GamburgerDialog.vue";
import CodeDialog from "@/components/CodeDialog.vue";

export const useCodeDialog = (store: typeof Store) => {
    const instance = ref<InstanceType<typeof CodeDialog> | null>(null)

    let codeDialog: WritableComputedRef<InstanceType<typeof CodeDialog>> = computed(() => store.state.code_dialog)

    return {
        instance,
        codeDialog
    }
}