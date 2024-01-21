import { IGrouppedProduct } from "./Product";

export interface BasketItem {
    quantity: number;
    product: IGrouppedProduct
}

export interface TimeZone {
    post_title: string;
    cfs: {
        "start": string,
        "end": string
    };
    taxonomies: Array<any>
}

// export interface OrderItem {
//     "id": number,
//     "name": string,
//     "product_id": 247,
//     "variation_id": 0,
//     "quantity": 1,
//     "tax_class": string,
//     "subtotal": string,
//     "subtotal_tax": string,
//     "total": string,
//     "total_tax": string,
//     "taxes": [],
//     "meta_data": [],
//     "sku": string,
//     "price": number,
//     "image": {
//         "id": string | number,
//         "src": string
//     },
//     "parent_name": null
// }
export interface IOrder {
    id: number;
    status: string;
    total: number;
    currency: string;
    date_created_gmt: string;
    date_created: string;
    date_completed_gmt: string | null;
    currency_symbol: string;
    timezone: TimeZone;
    code: number;
    "billing": {
        "first_name": string,
        "last_name": string,
        "company": string,
        "address_1": string,
        "address_2": string,
        "city": string,
        "state": string,
        "postcode": string,
        "country": string,
        "email": string,
        "phone": string
    };
    "shipping": {
        "first_name": string,
        "last_name": string,
        "company": string,
        "address_1": string,
        "address_2": string,
        "city": string,
        "state": string,
        "postcode": string,
        "country": string,
        "phone": string
    };
    line_items: BasketItem[];
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