import { State } from '@/types/App';
import { IGrouppedProduct } from '@/types/Product';
import { MutationTree, Module } from 'vuex';
import { BasketState } from './types';
import { basketGetters } from './getters';


export enum Mutations {
    SET_BASKET_ELEMENTS = 'SET_BASKET_ELEMENTS',
    ADD_BASKET_ELEMENTS = 'ADD_BASKET_ELEMENTS',
    UPDATE_BASKET_ELEMENTS = 'UPDATE_BASKET_ELEMENTS',
    DELETE_BASKET_ELEMENTS = 'DELETE_BASKET_ELEMENTS',
}

export const basketMutations: MutationTree<BasketState> = {
    [Mutations.SET_BASKET_ELEMENTS](state, products: Array<IGrouppedProduct>) {
        state.elements = products
    },
}


export const basket: Module<BasketState, State> = {
    state: () => ({
        elements: [],
        currentPaymentID: '',
    }),
    getters: basketGetters,
    mutations: basketMutations,
    namespaced: true,
}
