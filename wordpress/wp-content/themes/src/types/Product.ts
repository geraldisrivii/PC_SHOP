import { Term } from "./App";

export interface IProductCategory extends Term {
    
}

export interface IProduct {
    id: number;
    name: string;
    cfs: {
        shortly_name: string;
        properties: Array<{key: Array<Term>, value: string}>;
        [key: string]: any;
    }
    price: string | number;
    description: string;
    regular_price: string | number;
    sale_price: string | number;
    slug: string;
    images: Array<{
        src: string;
        [key: string]: any;
    }>
    categories: IProductCategory[];
    [key: string]: any;
}


export interface IGrouppedProduct extends IProduct {
    grouped_products: IProduct[];
}

export interface ISeriesProducts {
    [key: string]: Array<IGrouppedProduct>
}

export interface IProductReviewImage{
    path: string;
    result: boolean;
}


export interface IProductReview{
    id: number;
    product_id: number;
    rating: number;
    images: Array<IProductReviewImage>
    review: string;
    reviewer: string;
    status: string;
    title: string;
    verified: boolean;
}