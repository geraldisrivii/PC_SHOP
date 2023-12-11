import { computed } from "vue"
import Store from '@/store';
import { Mutations } from "@/store/user";
import { IUser } from "@/types/User";
export const useStoreUser = (store: typeof Store) => {

    const user = computed({
        get: () => store.state.user.user,
        set: (value: IUser) => store.commit(Mutations.SET_USER, value),
    })

    return {
        user
    }
}