// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // 添加mounted，不然不会执行预编译
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
})
