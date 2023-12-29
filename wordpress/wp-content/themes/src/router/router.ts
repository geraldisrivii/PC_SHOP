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


router.afterEach((to, from) => {
    window.scrollTo(0, 0)
    // if (to.fullPath == from.fullPath) {
    //     return
    // }
    preloaderOpen();
})

export default router