import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/home')
        }, {
            path: '/cinema',
            name: 'cinema',
            component: () => import('@/pages/cinema')
        }, {
            path: '/me',
            name: 'me',
            component: () => import('@/pages/me')
        }
    ],
    // scrollBehavior (to, from, savedPosition) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve({ x: 0, y: 0 })
    //         }, 500)
    //     })
    //  }
});

