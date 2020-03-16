# react-router-redux

redux调试工具:  谷歌插件：redux-DEVtools
                npm插件: redux-devtools-extension

## react-redux(yarn add react-redux)
- react:组件化的UI界面处理方案
- react-router：根据体质匹配路由，最终渲染不同的组件
- Redux：处理数据以及数据变化方案（主要用于处理共享数据）

> 如果一个组件，仅用于渲染一个ui界面，而没有状态（通常是一个函数组件），该组件被称为**展示组件**
> 如果一个组件，仅用于提供数据，没有任何属于自己的UI界面，则该组件被称为**容器组件**


react-redux库：连接redux和react

- Provider组件，没有任何UI界面，该组件的作用，是将redux的仓库放到一个上下文中
- connect组件，返回一个容器组件，将数据和事件处理函数传入要处理展示组件中
    - 细节一：如果对返回的容器组件加上额外的属性，则这些属性会直接传递到展示组件中
    - 第一个参数：mapStateToProps
        - 参数一：整个仓库的状态
        - 参数二：使用者传递的属性对象
    - 第二个参数：
        - 情况一：mapDispatchToProps
            - 参数一 dispatch
            - 参数二 使用者传递的属性对象
            - 函数返回的对象会作为属性传递到展示组件中（作为事件处理函数存在）
        - 情况二：传递一个对象，对象的每个属性是一个action创建函数，他会自动的将对象里边的函数名对应到展示组件的属性中，
        但是功能做出一点改变，到调用这些处理函数是，会自动dispatch函数返回的值
    - 细节二：如果不传递事件处理函数，则展示组件会自动获得一个dispatch属性，由组件自行触发dispatch（不推荐，在写展示组件的时不能考虑仓库）

react-redux库原理：
1. Provider 

    就是单纯返回一个value值为store的组件，传入的子组件原封不动的展示出来

2. connect 

    1. 监听store数据变化，变化时setState
    2. 参数一：mapStateToProps，调用函数，传入store中的数据 及直接调用store.getState() 将获得的对象传入该函数中
    3. 参数二：mapDispatchToProps,
        1. 该参数为函数时： 传入dispatch 调用，获得事件处理函数
        2. 该参数为对象时：利用redux中的bindActionCreators 将创建的action创建函数 转换为dispatch创造函数，返回一个存放该函数的对象，属性名与传入的对象的属性名一致
    4. 优化：
        1. react-redux用类组件的版本：用的是purComponent 进行对组件的优化，对前后state进行浅比较，如果一致则不进行渲染，不一致时渲染
        2. react-redux用函数组件的版本：在setState时传入函数，该函数参数为上一个state 对新旧状态进行比较 如果一致则不重新渲染，反之渲染
        3. 使用react-redux的组件内优化，传入的mapStateToProps 尽量返回一个内部没有对象的对象，这样每次调用的时候，purComponent进行浅比较时，留下一种情况，只要值变了就重新刷新，不然内部对象地址发生变化后也会导致重新渲染



## router-redux(yarn add connected-react-router)

用于将redux和react-router进行结合

本质上，router 中的某些数据可能会跟数据仓库中的数据进行联动

该组件会将下面的路由数据存放到仓库中并与仓库同步

1. action 他表示当前路由跳转的方式

2. location :他记录了当前的地址信息

该库中的内容

### connectRouter
    创建一个处理路由信息的reducer，该函数需要传递一个参数，该函数需要传递一个history对象
### routerMiddleware
    该函数返回一个redux中间件，用于拦截一些特殊的action
### ConnectedRouter
    包装了 react-router 的 三种创建router的一个组件