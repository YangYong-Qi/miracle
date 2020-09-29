import axios from 'axios'
import { showLoading, hideLoading } from './loading'
import { Message } from 'element-ui'
//axios.defaults.baseURL = process.env.VUE_APP_APi
axios.defaults.timeout = 10000
// axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded'
axios.interceptors.request.use(
    config => {
        showLoading()
        return config
    },
    error => {
        return Promise.error(error)
    }
)

axios.interceptors.response.use(
    response => {
        hideLoading()
        if (response.data.state == 'error') {
            Message.error(response.data.message)
            //return Promise.reject(response)
            return response
        } else {
            //return Promise.resolve(response)
            return response
        }
    },

    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 500:
                    console.log(500)
                    break
                case 404:
                    console.log(404)
                    break

                default:
            }
            return Promise.reject(error.response)
        }
    }
)
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}
