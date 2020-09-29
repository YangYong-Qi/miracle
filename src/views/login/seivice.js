import { post } from '@/http'

// 用户登录
export function checkLogin(data) {
    return new Promise((resolve, reject) => {
        post('/api/Login/CheckLogin', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
