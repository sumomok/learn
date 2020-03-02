# 路由嵌套路径
1. match.url 是父组件的匹配路径 link中需要路径的时候可以 用此路径拼接上子路径的名称来达到路由嵌套的作用
# 受保护的页面

使用route的render属性 参数是个函数 返回值是要渲染的组件 如果未经授权的跳转 可以使用redirect来重定向到其他组件中

# Vue路由模式
定义路由配置文件，处理路由对象数据，创建相应的route组件
# 实现守卫导航
listen 监听路径变化
block 阻塞跳转
getUserCofirmation 获取阻塞信息以及进行一系列操作

# 路由切换动画
 若使用React-transition-grup  in属性退出进入的判断可以用 match属性是否存在来判断  存在则是匹配了就是enter  不存在就是exit 
# 滚动条复位
    window 对象上的设置滚动条位置（0,0）即可
# 阻止跳转

react-route-dom 中提供了个组件  Prompt  可以来达到某些情况下阻止跳转的作用

原理就是 利用了 history.block getUserCofirmation