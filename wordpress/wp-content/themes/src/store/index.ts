import { ActionTree, GetterTree, MutationTree, StoreOptions, createStore } from 'vuex'
import { Settings, State } from '@/types/App'
import { user } from './user/index';
import { products } from './products/index';
import { UserState } from './user/types';
import { Ref } from 'vue';
import SpecDialog from '@/components/SpecDialog.vue';
import StatusDialog from '@/components/UI/StatusDialog.vue';
import { ProductState } from './products/types';



export enum Mutations {
  SET_APP_SETTINGS = 'SET_APP_SETTINGS',
  SET_PAGE_SETTINGS = 'SET_PAGE_SETTINGS',
  SET_SPEC_DIALOG = 'SET_SPEC_DIALOG',
  SET_STATUS_DIALOG = 'SET_STATUS_DIALOG',
}

interface StoreWithModules extends State {
  user?: UserState
  products? : ProductState
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
}

export default createStore<StoreWithModules>({
  state: {
    app: null,
    page: null,
    spec_dialog: null,
    status_dialog: null
  },
  getters: {

  },
  mutations,
  actions: {
  },
  modules: {
    user,
    products
  },
})

