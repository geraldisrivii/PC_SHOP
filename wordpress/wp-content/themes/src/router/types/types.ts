export type KatalogCategoryType = 'gaming' | 'workstation' | 'laptop';

export interface MyRouteRecordRaw {
    meta?: {
        category?: KatalogCategoryType
    }
}