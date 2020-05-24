import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue';
import RecommendContent from '../components/Home/content.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    // 当子路由存在默认路由时，需要把父路由的name去掉，否则当路由跳转时（:to={name:"Home"}）时将无法展示默认的子路由
    component: Home,
    children: [{
      path: "/",
      name: "recommend",
      component: RecommendContent
    }, {
      path: "/technology",
      name: "technology",
      component: () => import('../views/technology.vue'),
    }, {
      path: "/note",
      name: "note",
      component: () => import('../views/note.vue'),
    }, {
      path: "/problem",
      name: "problem",
      component: () => import('../views/problem.vue'),
      },
      {
        path: "/book",
        name: "book",
        component: () => import('../views/book.vue'),
      },
      {
        path: "/blog/:id",
        name: "blog",
        component: () => import('../views/blog.vue'),
    }]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
