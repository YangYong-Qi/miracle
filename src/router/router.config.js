export const constantRoutes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login'),
        meta: { hidden: true, title: '登录' }
    }
]
