import { Ref, WritableComputedRef, computed, onMounted, ref } from "vue"
import Store, { Mutations, mutations } from '@/store';
import CartDialog from "@/components/CartDialog.vue";
import ProfileDialog from "@/components/ProfileDialog.vue";

export const useProfileDialog = (store: typeof Store) => {
    const instance = ref<InstanceType<typeof ProfileDialog> | null>(null)

    let profileDialog: WritableComputedRef<InstanceType<typeof ProfileDialog>> = computed(() => store.state.profile_dialog)

    return {
        instance,
        profileDialog
    }
}