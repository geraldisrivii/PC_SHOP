import { GetterTree } from "vuex";
import { Getters, BasketState } from "./types";
import { State } from "@/types/App";



export const basketGetters: GetterTree<BasketState, State> = {
    [Getters.GET_COUNT_ELEMENTS](state): number {
        return state.elements.length
    },
    [Getters.GET_BASKET_ITEMS](state) {
        return state.elements
    },
}