import { GetterTree, Module, MutationTree } from 'vuex'
import { UserState } from './types'
import { IUser } from '@/types/User';
import { State } from '@/types/App';


export enum Mutations {
    SET_USER = 'SET_USER',
}

export const mutations: MutationTree<UserState> = {
    [Mutations.SET_USER](state, settings: IUser) {
        state.user = settings
    },
}

export const user: Module<UserState, State> = {
    state: {
        user: null
    },
    getters: {

    },
    mutations
}