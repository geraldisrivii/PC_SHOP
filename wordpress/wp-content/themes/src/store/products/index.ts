import { State } from '@/types/App';
import { IGrouppedProduct } from '@/types/Product';
import { MutationTree, Module } from 'vuex';
import { ProductState } from './types';

export enum Mutations {
    SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT',
}

export const mutations: MutationTree<ProductState> = {
    [Mutations.SET_CURRENT_PRODUCT](state, product: IGrouppedProduct) {
        state.product = product
    },
}

export const products: Module<ProductState, State> = {
    state: {
        product: null
    },
    getters: {

    },
    mutations
}