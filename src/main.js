import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueResource)

// 关闭生产模式下给出的提示
Vue.config.productionTip = false
    /* eslint-disable no-new */

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
    template: '<App/>',
    components: { App }
})


// Vue.use(VueResource)
// const app = new Vue({
//   router,
//   store,
//   ...App
// }).$mount('#app')