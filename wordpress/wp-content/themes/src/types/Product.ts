import { ApiImage, Term } from "./App";



export interface IProductFilter{
    key: Term[];
    link: Term[];
    type: {
        [key: string]: string
    },
    kind: {
        [key: string]: string
    };
    value: string | number;
    warning: string;
}

export interface IConfigureGroupe {
    label: string,
    includes: string[]
}

export interface IProductCategory extends Term {

}
export interface IProductCategoryResponse {
    id: number;
    name: string;
    slug: string;
    parant: number;
    count: number;
    image?: ApiImage;
}


export interface Game {
    "game_name": string,
    "game_statistic": [
        {
            "resolution": number[];
            "fps": string;
            value: number;
            color: string;
        },
    ]
}

export interface IProduct {
    id: number;
    name: string;
    cfs: {
        shortly_name: string;
        properties: Array<{ key: Array<Term>, value: string }>;
        statistic_games: Array<Game>;
        filters: IProductFilter[];
        [key: string]: any;
    }
    price: string | number;
    description: string;
    regular_price: string | number;
    sale_price: string | number;
    slug: string;
    stock_quantity: number;
    images: Array<ApiImage>;
    categories: IProductCategory[];
    taxonomies: {
        [key: string]: Term[]
    };
    [key: string]: any;
}


export interface IGrouppedProduct extends IProduct {
    grouped_products: IProduct[];
}

export interface ISeriesProducts {
    [key: string]: Array<IGrouppedProduct>
}

export interface IProductReviewImage {
    path: string;
    name: string;
    result: boolean;
}


export interface IProductReview {
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