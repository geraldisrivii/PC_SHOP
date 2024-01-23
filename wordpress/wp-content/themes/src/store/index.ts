import { MutationTree, createStore } from 'vuex'
import { Settings, State } from '@/types/App'
import { user } from './user/index';
import { products } from './products/index';
import { UserState } from './user/types';
import SpecDialog from '@/components/SpecDialog.vue';
import StatusDialog from '@/components/UI/StatusDialog.vue';
import { ProductState } from './products/types';
import Library from '@/components/Library.vue';

import { basket, basketMutations } from './basket/index'
import { BasketState } from './basket/types';
import CartDialog from '@/components/CartDialog.vue';
import ProfileDialog from '@/components/ProfileDialog.vue';
import GamburgerButton from '@/components/GamburgerButton.vue';
import GamburgerDialog from '@/components/GamburgerDialog.vue';
import CodeDialog from '@/components/CodeDialog.vue';


export enum Mutations {
  SET_APP_SETTINGS = 'SET_APP_SETTINGS',
  SET_PAGE_SETTINGS = 'SET_PAGE_SETTINGS',
  SET_SPEC_DIALOG = 'SET_SPEC_DIALOG',
  SET_STATUS_DIALOG = 'SET_STATUS_DIALOG',
  SET_LIBRARY_DIALOG = 'SET_LIBRARY_DIALOG',
  SET_CART_DIALOG = 'SET_CART_DIALOG',
  SET_PROFILE_DIALOG = 'SET_PROFILE_DIALOG',
  SET_GAMBURGER_DIALOG = 'SET_GAMBURGER_DIALOG',
  SET_CODE_DIALOG = 'SET_CODE_DIALOG',
}

interface StoreWithModules extends State {
  user?: UserState
  products?: ProductState,
  basket?: BasketState
}


export const mutations: MutationTree<State> = {
  [Mutations.SET_APP_SETTINGS](state, settings: Settings) {
    state.app = settings
  },
  [Mutations.SET_PAGE_SETTINGS](state, settings: Settings) {
    state.page = settings
  },
  [Mutations.SET_SPEC_DIALOG](state, instance: InstanceType<typeof SpecDialog>) {
    state.spec_dialog = instance
  },
  [Mutations.SET_STATUS_DIALOG](state, instance: InstanceType<typeof StatusDialog>) {
    state.status_dialog = instance
  },
  [Mutations.SET_LIBRARY_DIALOG](state, instance: InstanceType<typeof Library>) {
    state.library_dialog = instance
  },
  [Mutations.SET_CART_DIALOG](state, instance: InstanceType<typeof CartDialog>) {
    state.cart_dialog = instance
  },
  [Mutations.SET_PROFILE_DIALOG](state, instance: InstanceType<typeof ProfileDialog>) {
    state.profile_dialog = instance
  },
  [Mutations.SET_GAMBURGER_DIALOG](state, instance: InstanceType<typeof GamburgerDialog>) {
    state.gamburger_dialog = instance
  },
  [Mutations.SET_CODE_DIALOG](state, instance: InstanceType<typeof CodeDialog>) {
    state.code_dialog = instance
  },
}




export default createStore<StoreWithModules>({
  state: {
    app: null,
    page: null,
    spec_dialog: null,
    status_dialog: null,
    library_dialog: null,
    cart_dialog: null,
    profile_dialog: null,
    gamburger_dialog: null,
    code_dialog: null
  },
  mutations,
  getters: {

  },
  actions: {
  },
  modules: {
    user,
    products,
    basket
  },
})

