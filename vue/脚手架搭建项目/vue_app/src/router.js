import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';


Vue.use(Router);

export default new Router({
  // 组件生效后 根组件所携带的class名
  linkExactActiveClass:'active-exact',
  // 组件生效后 被选中的组件啊所携带的class名
  linkActiveClass:'active',
  //定义路由模式  hash模式（带#） 和 history模式（不带#）
  mode: 'history',
  // base: process.env.BASE_URL,
  // 定义路由 
  routes:[
    {
      path:'/login',
      name:'login',
      component:()=>import('./views/login'),
    },
    {
      // home组件可以不用写路径 ↓
      path:'/home',
      // 组件名字
      name:'home',
      // 使用组件，需要在上面引入组件（import）
      component:Home,
    },{
      path:'/learn',
      name:'learn',
      // 如果不是首页，为了节省资源可以进行懒加载 ↓
      component:()=>import('./views/Learn'),
    },{
      path:'/About',
      name:'About',
      component:()=>import('_v/About')
    },{
      path:'/Student',
      name:'Student',
      meta:{
        login:true,
      },
      component:()=>import('./views/Student')
    },{
      path:'/Community',
      name:'Community',
      meta:{
        login:true,
      },
      component:()=>import('./views/Community'),
      redirect:'/Community/academic',
      children:[
        {
          path:'academic',
          name:'academic',
          component:()=>import('./views/Academic')
        },
        {
          path:'download',
          name:'download',
          component:()=>import('./views/Download')
        },
        {
          path:'personal',
          name:'personal',
          component:()=>import('./views/Personal')
        }
      ]
    },
    {
      path:'/question/:id',
      name:'question',
      component:()=>import('./views/Question')
    },
    {
      path:'*',
      redirect(to){
        if(to.path == '/'){
          return '/home';
        } else {
          return '/Error';
        }
      }
    },
    {
      path:'/Error',
      name:'error',
      component:()=>import('./views/Error'),
    }
  ]
})






























// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './views/Home.vue'

// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       // 懒加载
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
