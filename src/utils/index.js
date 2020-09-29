// 设置 sessionStorage
export function setData(key, value) {
    return sessionStorage.setItem(key, JSON.stringify(value))
}
// 获取 sessionStorage
export function getData(key, value) {
    return JSON.parse(sessionStorage.getItem(key))
        ? JSON.parse(sessionStorage.getItem(key))[value]
        : false
}
