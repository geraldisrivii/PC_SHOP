import { Ref } from 'vue';
import { IProductCategory } from './Product';
import SpecDialog from '@/components/SpecDialog.vue';
import StatusDialog from '@/components/UI/StatusDialog.vue';
import Library from '@/components/Library.vue';
import CartDialog from '@/components/CartDialog.vue';
import ProfileDialog from '@/components/ProfileDialog.vue';
import GamburgerButton from '@/components/GamburgerButton.vue';
import GamburgerDialog from '@/components/GamburgerDialog.vue';
import CodeDialog from '@/components/CodeDialog.vue';


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
    cart_dialog: InstanceType<typeof CartDialog> | null;
    library_dialog: InstanceType<typeof Library> | null;
    profile_dialog: InstanceType<typeof ProfileDialog> | null;
    gamburger_dialog: InstanceType<typeof GamburgerDialog> | null;
    code_dialog: InstanceType<typeof CodeDialog> | null;
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
    id: number;
    name: string;
    src: string;
    [key: string]: any;
}

export interface IFormForUnregisteredUsers {
    name: string | null,
    tel: string | null,
}