import { getData } from '@/utils'
import { get } from '@/http'
export function queryPermissionsByUser() {
    return new Promise((resolve, reject) => {
        const userList = {
            menu: []
        }
        get('/api/ClientsData/GetMenus', {
            roleid: getData('userInfo', 'roleid')
        })
            .then(res => {
                userList.menu = res.data
                resolve(userList)
            })
            .catch(err => {
                reject(err)
            })
    })
}
