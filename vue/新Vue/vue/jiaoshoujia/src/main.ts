import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// 用脚手架搭建出来的为运行时版，比完整版体积小30%


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
