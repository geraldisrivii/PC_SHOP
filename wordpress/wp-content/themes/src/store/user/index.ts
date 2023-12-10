import { GetterTree, Module } from 'vuex'
import { State } from '@/types/App'
import { UserState } from './types'



export const user: Module<UserState, State> = {
    state: {
        user: null
    },
    getters: {
        
    }
}