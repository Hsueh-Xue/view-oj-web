import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('views/home.vue'),
        meta: {
            title: 'Home - viewOJ'
        }
    },
    {
        path: '/ranklist',
        name: 'Ranklist',
        component: () => import('views/ranklist.vue'),
        meta: {
            title: 'Ranklist - viewOJ'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('views/login.vue'),
        meta: {
            title: 'Login - viewOJ'
        }
    },
    {
        path: '/user/:userid',
        name: 'userinfo-page',
        component: () => import('views/userinfo'),
        meta: {
            title: 'Userinfo - viewOJ'
        }
    }, {
        path: '/error401',
        name: 'error401-page',
        component: () => import('views/error401'),
        meta: {
            title: 'Error - viewOJ'
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
})

export default router
