import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: async () => import('@/views/main.vue'),
        name: 'main'
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

export default router