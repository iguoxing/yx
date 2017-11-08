// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'

// 关闭生产模式下给出的提示
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>',
  components: { App }
})


// Vue.use(VueResource)
// const app = new Vue({
//   router,
//   store,
//   ...App
// }).$mount('#app')
