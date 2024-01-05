import { Ref } from 'vue';
import { IProductCategory } from './Product';
import SpecDialog from '@/components/SpecDialog.vue';
import StatusDialog from '@/components/UI/StatusDialog.vue';
import Library from '@/components/Library.vue';


export interface Settings {
    cfs: Object,
    [key: string]: any;
}

// store
export interface State {
    app: Settings | null;
    page: Settings | null;
    spec_dialog: InstanceType<typeof SpecDialog> | null;
    status_dialog: InstanceType<typeof StatusDialog> | null;
    library_dialog: InstanceType<typeof Library> | null;
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


export interface MenuButtonItem {
    value: string | number;
    label: string;
}

export interface Term {
    term_id: number;
    name: string;
    slug: string;
    [key: string]: any;
}


export interface ApiImage {
    name: string;
    src: string;
    [key: string]: any;
}

