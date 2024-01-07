import { Ref, WritableComputedRef, computed, onMounted, ref } from "vue"
import Store, { Mutations, mutations } from '@/store';
import CartDialog from "@/components/CartDialog.vue";

export const useCartDialog = (store: typeof Store) => {
    const instance = ref<InstanceType<typeof CartDialog> | null>(null)

    let cartDialog: WritableComputedRef<InstanceType<typeof CartDialog>> = computed(() => store.state.cart_dialog)

    return {
        instance,
        cartDialog
    }
}