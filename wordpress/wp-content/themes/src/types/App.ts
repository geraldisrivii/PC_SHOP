import { IProductCategory } from './Product';


export interface Settings {
    cfs: Object,
    [key: string]: any;
}

// store
export interface State {
    app: Settings | null,
    page: Settings | null
}


export interface ISocials {
    image: string;
    link: string;
}

export interface ICategoryMainPage {
    image: string;
    product_cat: Array<IProductCategory>;
    price?: number | string;
}