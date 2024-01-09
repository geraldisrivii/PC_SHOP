import { IGrouppedProduct } from "./Product";

export interface BasketItem {
    quantity: number;
    product: IGrouppedProduct 
}


export interface ShippingTime {
    id: number;
    title: {
        rendered: string
    };
    cfs: {
        start: string;
        end: string;
    }
}