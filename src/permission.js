import router from './router'
import store from './store'
import { getData } from '@/utils'
import { routerGo } from '@/utils/router'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    const title = to.meta.title
    store.commit('SET_HEADERTITLE', {
        title,
    })
    const token = getData('uid')
    if (token) {
        if (to.path === '/login') {
            next({
                name: 'Dashboard',
            })
        } else {
            if (store.getters.permissionList.length === 0) {
                store.dispatch('getPermissionList').then((response) => {
                    routerGo(to, next, response, router)
                })
            } else {
                store.commit('SET_TABS', to)
                next()
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }
    }
})
