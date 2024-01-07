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
    // [Mutations.ADD_BASKET_ELEMENTS](state, newBasketElement: IGrouppedProduct) {

    //     let sameElementIndex = state.elements.findIndex(item => item.product.id == newBasketElement.product.id)

    //     if (sameElementIndex != -1) {
    //         return state.elements[sameElementIndex] = newBasketElement;
    //     }

    //     state.elements.push(newBasketElement)
    // },
    // [Mutations.UPDATE_BASKET_ELEMENTS](state, basketElement: IGrouppedProduct) {
    //     let elementInArrayIndex = state.elements.findIndex(item => item.product.id == basketElement.product.id)
    //     state.elements[elementInArrayIndex] = basketElement;
    // },
    // [Mutations.DELETE_BASKET_ELEMENTS](state, basketElement: IGrouppedProduct) {
    //     state.elements = state.elements.filter(item => item.product.id != basketElement.product.id)
    // },
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
