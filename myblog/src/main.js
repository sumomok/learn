/*
 * @Author: your name
 * @Date: 2020-03-23 15:17:07
 * @LastEditTime: 2020-03-23 16:09:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\myblog\src\main.js
 */
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import RouterConfig from './router/router.js';
Vue.use(VueRouter);
Vue.use(Vuex)
// Vue.config.productionTip = false
let router = new VueRouter(RouterConfig);
let store = new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
