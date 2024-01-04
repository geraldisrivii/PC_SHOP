import { Term } from "./App";

export interface IProductCategory extends Term {

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
        statistic_games: Array<Game>
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