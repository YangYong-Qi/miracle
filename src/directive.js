import Vue from 'vue'
// 只能输入数字
Vue.directive('numberOnly', {
    bind: function(e) {
        e.handler = function() {
            e.value = e.value.replace(/\D+/, '')
        }
        e.addEventListener('input', e.handler)
    },
    unbind: function(e) {
        e.removeEventListener('input', e.handler)
    }
})
