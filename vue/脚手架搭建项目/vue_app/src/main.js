import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入css
import './assets/styles/reset.css'

Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
  if(to.meta.login){
    if(to.matched.some(router=>router.meta.login)){
      if(document.cookie == 'login=true'){
        next();
      }else {
        if(window.confirm('要登录么？')){
          next('login');
        } else {
          return 
        }
      };
    } 
  } else {
    next();
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
