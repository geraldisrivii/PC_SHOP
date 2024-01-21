import { Ref, WritableComputedRef, computed, onMounted, ref } from "vue"
import Store, { Mutations, mutations } from '@/store';
import GamburgerButton from "@/components/GamburgerButton.vue";
import GamburgerDialog from "@/components/GamburgerDialog.vue";

export const useGamburgerDialog = (store: typeof Store) => {
    const instance = ref<InstanceType<typeof GamburgerDialog> | null>(null)

    let gamburgerDialog: WritableComputedRef<InstanceType<typeof GamburgerDialog>> = computed(() => store.state.gamburger_dialog)

    return {
        instance,
        gamburgerDialog
    }
}