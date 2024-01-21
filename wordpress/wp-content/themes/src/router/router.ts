import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: async () => import('@/views/main.vue'),
        name: 'main',
    },
    {
        path: '/katalog/:category',
        component: async () => import('@/views/katalog.vue'),
        name: 'katalog',
    },
    {
        path: '/katalog/:category/:product_slug',
        component: async () => import('@/views/productPage.vue'),
        name: 'product',
    },
    {
        path: '/configurator/:product',
        component: async () => import('@/views/configurator.vue'),
        name: 'configurator',
    },
]

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    }
})

declare var preloaderOpen: () => void;

import deepEqual from 'deep-equal';
import { useGamburgerDialog } from '@/hooks/App/useGamburgerDialog';
import store from '@/store';

const { gamburgerDialog } = useGamburgerDialog(store)

router.afterEach((to, from) => {
    if (to.fullPath == from.fullPath && deepEqual(to.params, from.params)) {
        console.log(to.fullPath)
        return
    }
    if(gamburgerDialog.value){
        gamburgerDialog.value.close()
    }
    
    preloaderOpen();
    window.scrollTo(0, 0)
})

export default router