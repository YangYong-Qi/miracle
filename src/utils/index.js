// 获取 sessionStorage
export function getData(data) {
    return sessionStorage.getItem(data)
}
// 设置 sessionStorage
export function setData(key, value) {
    return sessionStorage.setItem(key, value)
}
