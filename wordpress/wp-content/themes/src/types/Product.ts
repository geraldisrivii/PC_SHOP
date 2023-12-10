export interface IProductCategory {
    term_id: number;
    name: string;
    slug: string;
    [key: string]: any;
}

export interface IProduct {
    id: number;
    name: string;
    cfs: {
        shortly_name: string;
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
