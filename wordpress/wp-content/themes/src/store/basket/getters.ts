import { GetterTree } from "vuex";
import { Getters, BasketState } from "./types";
import { State } from "@/types/App";
import { BasketItem } from "@/types/Basket";



export const basketGetters: GetterTree<BasketState, State> = {
    [Getters.GET_COUNT_ELEMENTS](state): number {
        return state.elements.length
    },
    [Getters.GET_BASKET_ITEMS](state) {
        return state.elements
    },
    [Getters.GET_BASKET_ITEMS_GROUPED](state): BasketItem[] {

        let filteredELements: BasketItem[] = [];

        for (const good of state.elements) {

            if(filteredELements.find(item => item.product.id == good.id)) {
                continue
            }

            const goodsWithSameID = state.elements.filter(item => item.id == good.id)

            filteredELements.push({
                quantity: goodsWithSameID.length,
                product: good
            })
        }

        return filteredELements
    },
}