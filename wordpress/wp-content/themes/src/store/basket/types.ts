import { IGrouppedProduct } from '@/types/Product';

export interface BasketState {
    elements: Array<IGrouppedProduct> | null
}

export enum Getters {
    GET_COUNT_ELEMENTS = 'GET_COUNT_ELEMENTS',
    GET_BASKET_ITEMS = 'GET_BASKET_ITEMS',
    GET_BASKET_ITEMS_GROUPED = 'GET_BASKET_ITEMS_GROUPED',
}
