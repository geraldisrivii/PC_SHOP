import { ActionTree, GetterTree, MutationTree, StoreOptions, createStore } from 'vuex'
import { Settings, State } from '@/types/App'
import { user } from './user/index';
import { UserState } from './user/types';



export enum Mutations {
  SET_APP_SETTINGS = 'SET_APP_SETTINGS',
  SET_PAGE_SETTINGS = 'SET_PAGE_SETTINGS'
}

interface StoreWithModules extends State {
  user?: UserState
}


export const mutations: MutationTree<State> = {
  [Mutations.SET_APP_SETTINGS](state, settings: Settings) {
    state.app = settings
  },
  [Mutations.SET_PAGE_SETTINGS](state, settings: Settings) {
    state.page = settings
  }
}

export default createStore<StoreWithModules>({
  state: {
    app: null,
    page: null
  },
  getters: {

  },
  mutations,
  actions: {
  },
  modules: {
    user
  },
})

