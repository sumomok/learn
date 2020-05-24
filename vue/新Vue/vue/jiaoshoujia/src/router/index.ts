import Vue from 'vue';
import VueRouter, { RouterOptions, RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
Vue.use(VueRouter);
const Routers: RouteConfig[] = [{
  path: '/', component: Home,
}, {
  path: '/about', component: () => import('../views/About.vue'),
  // redirect: { name: "aboutComp" },
  children: [{
    path: 'aboutComp', component: () => import('../components/AboutComp.vue'),
    name: "aboutComp",
    alias: "/",
  },
  {
    path: 'aboutComp1', component: () => import('../components/AboutComp1.vue'),
  },
  ],
},
{
  path: '/learn', component: () => import('../views/Learn.vue'),
  children: [{
    path: '/', component: () => import('../components/LearnComp.vue'),
  },
  {
    path: 'learnComp1', component: () => import('../components/LearnComp1.vue'),
  },
  ],
},
];

export default new VueRouter({
  mode: 'history',
  routes: Routers,
});
