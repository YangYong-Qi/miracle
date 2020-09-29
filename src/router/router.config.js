export const constantRoutes = [
    {
        path: '/',
        name: '/',
        component: () => import('@/layout/BasicLayout'),
        redirect: '/dashboard',
        meta: {
            title: '控制台',
            icon: 'icon-dashboard'
        },
        children: [
            {
                name: 'Dashboard',
                path: 'dashboard',
                component: () => import('@/views/dashboard/index'),
                meta: {
                    title: '控制台',
                    icon: 'icon-dashboard'
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login'),
        meta: { hidden: true, title: '登录' }
    }
]
