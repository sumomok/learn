# umijs 简介

官网：https://umijs.org/


umijs 是一个框架

## 全局安装umi
提供一个命令行工具：umi，通过该命令可以对umi工程进行操作

umi还可以使用对应的脚手架


## 约定式路由

    umi对于路由的处理，主要通过两种方式：
**umi 3.x以上**
1. 约定式：使用约定好的文件夹和文件，来代表页面，umi会根据开发者书写的页面，生成路由配置。
    1. umi约定，工程中的pages文件夹中存放的是页面。如果工程包含src目录，则src/pages是页面文件夹
    2. umi约定，页面的文件名，以及页面的文件路径，是该页面匹配的路由（注意文件名不能和文件夹名相同）(所有页面相关的必须都放在pages下面)
    3. umi约定，如果页面的文件名index，则可以省略文件夹名（首页）
    4. umi约定，如果src/layouts目录存在，该目录中的index.tsx表示的是全局的通用布局，布局中的children则会添加具体的页面
    5. umi约定, 如果pages文件夹中_layout.js/_layout.tsx，则该文件所在文件夹的所有的子页面都会共用该布局
    6. umi约定，pages/404.js,表示404页面，如果路由无匹配就会自动渲染该页面。该页面在开发模式下无效，编译后部署生效
    7. umi约定，使用[名称]，会产生动态路由（$名称$(2.0x传递方法)表示该属性对应的属性值可传可不穿(3.x以上暂不支持)）
### 跳转
    在要跳转的地方引入link组件，与react-router的link组件完全一致
```js
    import {Link,NavLink,history} from 'umi'
```
    代码跳转 : 上述语句中引入的history对象来进行跳转
    导入模块时，@表示src目录
### 路由信息的
    所有组件都可以拿到下面的属性
 - match 等同于 react-router组件提供的match
 - history 等同于react-router的history（history.loaction.query的原始值被重新拆解封装为一个对象）
 - loaction 等同于 react-router的loaction（loaction.query的原始值被重新拆解封装为一个对象）
 - route 对应的是路由配置
 
2. 配置式：直接书写路由配置文件