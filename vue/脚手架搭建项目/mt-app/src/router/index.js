import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '../layout/default.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [{
        path: '/index',
        name: 'index',
        component: () => import('@/page/index.vue')
      }, {
        path: '/changeCity',
        name: 'changeCity',
        component: () => import('@/page/changeCity.vue')
      },
      {
        path: '/goodsList',
        name: 'goodsList',
        component: () => import('@/page/goodsList.vue')
      },
      {
        path: 's/:name',
        name: 'goods',
        component: () => import('@/page/goodsList.vue')

      },
      {
        path: '/productDeatil',
        name: 'productDeatil',
        component: () => import('@/page/detail.vue')

      },]
    },
    {
      path: '/blank',
      name: 'blank',
      component: () => import('../layout/blank.vue'),
      children: [{
        path: '/login',
        name: 'login',
        component: () => import('../page/login.vue')
      }, {
        path: '/register',
        name: 'register',
        component: () => import('../page/register.vue')
      }]
    }
  ]
})
