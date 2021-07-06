import {createRouter, createWebHashHistory} from 'vue-router'
// import Home from 'views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Ranklist',
        component: () => import('views/ranklist.vue'),
        meta: {
            title: 'Ranklist - viewOJ'
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            title: 'Aboug - viewOJ'
        }
    },
    // {
    //     path: '/ranklist',
    //     name: 'Ranklist',
    //     component: () => import('views/ranklist.vue'),
    //     meta: {
    //         title: 'Ranklist - viewOJ'
    //     }
    // },
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
