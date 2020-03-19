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
    7. umi约定，使用[名称].js（**2.x 为$名称.js**），会产生动态路由（**$名称$(2.0x传递方法)**表示该属性对应的属性值可传可不穿(**3.x以上暂不支持**)）
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
 
## 配置式路由
    当使用了路由配置后，约定式路由全部失效
1. 使用根目录下的文件```.umirc.js``` (**3.x后文件名为 .umirc.ts**)
2. 使用根目录下的文件```config/config.js```(**3.x后文件名为 config.ts**)

进行路由配置式，每个配置就是一个匹配规则，并且，每个配置式一个对象，对象中的某些属性会直接生成route组件的属性

- component配置项，需要填写页面组件的路径，路径相对于src为根路径
- 如果匹配项没有exact，则会自动添加exact为true
- 每一个路由配置，可以添加任何属性
- Routes属性是一个数组，数组的每一项是一个组件路径，路径相对于项目根目录，当匹配到路由后，会转而渲染该属性置顶的组件，并会将component组件作为children放到匹配的组件中（**3.x后属性名换为wrappers**）
- 路由配置中的信息，同样可以加入到约定路由中，方式是:
    1. 为约定路由添加第一个文档注释（注释格式为yaml），需要把注释放到文档最上边（**2.x版本定义方法**）
    2. 直接在相应导出的函数组件中添加属性 ```函数.属性 = 属性值``` 可以将属性加入到约定路由中
## 使用umi插件
    2.x 在配置中写 如下 ↓：
```js
    export defalut {
        plugins:[
            ["umi-plugins-react",{
                //相关配置
                dva:{

                }
            }]
        ]
    }
```

3.x以上 如下， 且需要**yarn add umi**（否则会报找不到"umijs"model的错误） 和 yarn add @umijs/plugin-dva 然后umi 会自动注册相应的插件
    1. 读取 package.json 中的dependencies属性值(安装完毕之后umijs运行时自动注册) 一般用于umijs中不自带的插件
    2.  如下，一般用于umijs中自带的插件
```js
export default {
  presets: ['./preset', 'foo/presets'],
  plugins: ['./plugin'],
}
```
```js
    dva: {
        immer: true,
        hmr: false,
      },
```
# umi使用样式
解决两个问题：
1. 保证类样式名称的唯一性：css-module
2. 样式代码的重复
## 局部样式和全局样式
    局部样式原理：
        就是在相同的样式前加入不同的随机数前缀，以达到唯一的样式
    底层使用了webpack的加载器：css-loader（内部包括了css-module的功能）
    1. 某个组件特有的样式，不与其他组件共享，通常，将该样式文件与组件放置在同一个目录
    2. 如果某个样式可能被某个组件共享，这样的样式，通常放到assets/css中
    3. 全局样式 全局样式，名称一定唯一，不需要css-module处理 global.css（你写什么类样式，就合并什么类样式）
## less
    直接书写less代码即可  umijs内部会判断是否是less文件

# umijs 代理和模拟数据（proxy,mock）
## proxy
在配置中导出
```js
export default {
    proxy:{
        // "/api" 以什么路径开头
        "/api":{
            // 目标服务器IP和端口
            "target":"http://api.duyiedu.com/",
            // 是否改变源 （即 避开浏览器的同源策略，进行跨域）
            "changeOrigin":true,
        }
    }
}
```
然后 当对 /api进行ajax请求时 会被devServer截获 然后添加前缀和改变源
