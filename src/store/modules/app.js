import { queryPermissionsByUser } from '@/api/api'
import { constantRoutes } from '../../router/router.config'
const user = {
    state: {
        isCollapse: false,
        title: '',
        tabs: [],
        permissionList: []
    },
    actions: {
        getPermissionList({ commit }) {
            return new Promise((resolve, reject) => {
                queryPermissionsByUser().then(response => {
                    const { menu } = response
                    if (menu && menu.length > 0) {
                        commit('SET_PERMISSIONLIST', menu)
                        resolve(menu)
                    } else {
                        reject('获取用户导航信息失败')
                        console.error('获取用户导航信息失败')
                    }
                })
            })
        }
    },
    mutations: {
        SET_PERMISSIONLIST: (state, permissionList) => {
            state.permissionList = constantRoutes.concat(permissionList)
        },
        SET_COLLAPSE: state => {
            state.isCollapse = !state.isCollapse
        },
        SET_HEADERTITLE: (state, action) => {
            state.title = action.title
            document.title = '泰康云 - ' + action.title
        },
        SET_TABS: (state, action) => {
            const { tabs } = state
            let status = true
            if (tabs.length == 0) {
                state.tabs.push(action)
            }
            for (const item in tabs) {
                if (tabs[item].name == action.name) {
                    status = false
                }
            }
            if (status) {
                state.tabs.push(action)
            }
        }
    }
}

export default user
