import { get } from '@/http'

class Api {
    static getTableList(url, data) {
        return new Promise((resolve, reject) => {
            get(url, data)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}
export default Api
