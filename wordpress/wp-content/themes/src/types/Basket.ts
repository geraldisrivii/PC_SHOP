import { IGrouppedProduct } from "./Product";

export interface BasketItem {
    quantity: number;
    product: IGrouppedProduct 
}