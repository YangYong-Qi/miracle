export function queryPermissionsByUser() {
    return new Promise((resolve) => {
        const userList = {
            menu: [
                {
                    path: '/',
                    name: '/',
                    component: 'Layout',
                    redirect: '/dashboard',
                    meta: {
                        title: '控制台',
                        icon: 'icon-dashboard',
                    },
                    children: [
                        {
                            name: 'Dashboard',
                            path: 'dashboard',
                            component: 'dashboard/index',
                            meta: {
                                title: '控制台',
                                icon: 'icon-dashboard',
                            },
                        },
                    ],
                },
                {
                    path: '/user',
                    name: 'User',
                    component: 'Layout',
                    redirect: '/user/index',
                    meta: {
                        title: '会员管理',
                        icon: 'icon-biaodanyemian',
                    },
                    children: [
                        {
                            path: 'index',
                            name: 'UserIndex',
                            component: 'user/index',
                            meta: {
                                title: '会员管理',
                                icon: 'icon-biaodanyemian',
                            },
                        },
                    ],
                },
                {
                    path: '/healthy',
                    name: 'Healthy',
                    component: 'Layout',
                    redirect: '/healthy/index',
                    meta: {
                        title: '健康管理',
                        icon: 'icon-tubiaozhizuomoban',
                    },
                    children: [
                        {
                            path: 'index',
                            name: 'HealthyIndex',
                            component: 'healthy/index',
                            meta: {
                                title: '健康管理',
                                icon: 'icon-tubiaozhizuomoban',
                            },
                        },
                    ],
                },
                {
                    path: '/news',
                    name: 'News',
                    component: 'Layout',
                    redirect: '/news/index',
                    meta: {
                        title: '消息管理',
                        icon: 'icon-xiaoxi',
                    },
                    children: [
                        {
                            path: 'index',
                            name: 'NewsIndex',
                            component: 'news/index',
                            meta: {
                                title: '消息管理',
                                icon: 'icon-xiaoxi',
                            },
                        },
                    ],
                },
            ],
        }
        resolve(userList)
        // get('/sys/permission/getUserPermissionByToken', {
        //     token: getData('token')
        // })
        //     .then(res => {})
        //     .catch(err => {
        //         reject(err)
        //     })
    })
}
