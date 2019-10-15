# learn
# 导航守卫
## 全局守卫（路由全局创建）
- beforeEach  
- beforeResolve
- afterEach
## 路由独享守卫（路由内部创建）
- beforEnter
## 组件内守卫（组件内部创建）
- beforeRouterLeave （当离开组件的时候 从a路由切换到b路由且组件不复用的时候触发）
- beforeRouteEnter（当进入组件的时候）
- beforeRouteUpdate mounted（当离开组件路由切换且组件复用的时候触发触发）
- to from next

### 守卫执行顺序
    上一个组件的离开守卫（beforeRouterLeave）=> 全局守卫（beforeEach0 ）=>路由独享守卫（beforEnter）=>组件内守卫（beforeRouteEnter）=> 组件执行完毕后守卫（afterEach）

## 动态路由
- /question/:id
- this.$route.params.xx

### 地址栏传值
- this.$route.query.xxx