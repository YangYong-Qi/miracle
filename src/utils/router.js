import Layout from '@/layout/BasicLayout'

export function routerGo(to, next, getRouter, router) {
    getRouter = filterAsyncRouter(getRouter)
    router.addRoutes(getRouter)
    next({ ...to, replace: true })
}

function filterAsyncRouter(asyncRouterMap) {
    const accessedRouters = asyncRouterMap.filter(route => {
        if (route.component) {
            if (route.component === 'Layout') {
                route.component = Layout
            } else {
                route.component = require('@/views/' +
                    route.component +
                    '/' +
                    'index.vue').default
            }
        }
        if (!route.meta) {
            route.meta = {}
        }
        if (route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children)
        }
        return true
    })
    return accessedRouters
}
