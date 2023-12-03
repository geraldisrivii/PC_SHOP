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
    // {
    //     path: '/katalog/laptops',
    //     component: async () => import('@/views/katalog.vue'),
    //     name: 'katalog-gaming-laptops',
    //     meta: {
    //         category: 'laptop'
    //     }
    // },
    // {
    //     path: '/katalog/workstations',
    //     component: async () => import('@/views/katalog.vue'),
    //     name: 'katalog-workstation',
    //     meta: {
    //         category: 'workstation'
    //     }
    // },
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

export default router