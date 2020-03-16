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