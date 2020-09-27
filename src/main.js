import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './directive'
import './permission'
import './use'
import './style/index.less'
import './style/element.less'
import './icon/iconfont.css'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
