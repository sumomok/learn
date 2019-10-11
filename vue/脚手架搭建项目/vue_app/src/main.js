import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入css
import './assets/styles/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
