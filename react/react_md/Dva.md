<!--
 * @Author: your name
 * @Date: 2020-03-16 09:19:38
 * @LastEditTime: 2020-03-16 18:31:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react_md\Dva.md
 -->
# dva

官方网站：https://dvajs.com/guide/

dva不仅仅是一个第三方库，更是一个框架，它主要整合了redux的相关内容，让我们处理数据更加容易，实际上dava一依赖了很多：react react-router redux redux-saga react-redux，connected-react-router

1. dva执行后会默认导出一个函数，通过调用该函数，可以得到一个dva对象
2. dva对象.router：路由方法，传入一个函数，该函数返回一个react节点，捡来，应用程序驱动后，会自动渲染该节点。
    1. 如果是函数组件，可以直接传入
    2. 如果是类组件，必须用函数进行包装，返回一个react组件即可
3. dva对象.start: 该方法用于启动dva应用程序，可以认为启动的就是react程序，该函数传入一个选择器，用于选中页面中的某个dom元素，react会将内容渲染到该元素的内部。
4. dva对象.model：该方法用于定义一个模型，该模型可以理解为redux的action、reducer、redux-saga副作用处理的整合，整合成一个对象，将该对象传入model方法即可
    1. namespace:命名空间，字符串类型，必传，会被作为仓库中的属性，用来区分其他模型的标准
    2. state ： 该模型的默认状态
    3. reducers： 该属性配置为一个对象，对象中的每一个方法都是一个reducer，dva约定，方法的名字，就是匹配的action类型
    4. effects：副作用处理，底层用的是redux-saga实现的，该属性为一个对象，
5. 在dva中同步路由到仓库
    1. 在调用dva函数时，配置history对象
    2. 使用ConnectedRouter提供路由上下文
6. 创建dva应用的配置：
    1. history:同步到仓库的history对象
    2. initialState：仓库的初始状态
    3. onError:当仓库的运行发生错误的时候，
    4. onAction:当触发action做一些事情（就是一个redux中间件）
        1. 传入一个中间件对象
        2. 传入一个中间件数组
    5. onStateChange:当状态发生变化的时候触发（对根reducer函数进行重新订阅，因为当状态发生改变时，必定有reducer的调用）
    6. onReducer:对模型中的reducer的进一步封装（对根reducer函数进行重新订阅）
    7. onEffect:类似于对模型中的effect的进一步封装（对于每个通过触发Action来触发的异步操作进行订阅）
    8. extraReducers 用于配置额外的Reducers，他是一个对象，每一个属性值为一个方法，每个方法执行得到的值都会合并到store里边（直接混合到根reducer中即可）
    9. extraEnhancers：它适用于封装createstore函数，dva会将原来的仓库创建函数作为参数传递，返回一个新的用于创建仓库的函数。函数必须放在数组中（可能存在多个创建函数） （原理：**将传入的createStore作为第一个函数，将得到的结果套娃式传递到extraEnhancers这个数组中(具体语句 ↓)**）
    ```js
        let newCreateStore = extraEnhancers.reduce((f1,f2)=>f2(f1),createStore);
    ```
    **3-9是实现了Dva对store，saga两个扩展的各方面的代理订阅，包括但不限于action的调用订阅，数据改变时的订阅，reducer调用时的订阅，异步处理时的订阅，**

## dva插件
    通过 **dva对象.use(插件)**,来使用插件，插件本质上就是一个对象，该对象与配置对象相同，dva会在启动时，将传递的插件对象混合到配置中。
### dva-loading

    该插件会在仓库中加入一个状态,名称为loading，他是一个对象，其中有一下属性
    - global：全局是否正在处理副作用（加载），只要有任何一个模型在处理副作用，该属性为true，
    - model ： 说明是哪个数据模型正在加载，加载为true
    - effects：说明是哪个异步操作正在加载。

    原理 ：
    dva.use() 传入一个配置对象，与dva内部配置对象进行混合
    dva-loading: 
    返回一个配置对象，将需要混合的reducer配置（{global:false,model:{},effect:{}}）到extraReducers中,
    