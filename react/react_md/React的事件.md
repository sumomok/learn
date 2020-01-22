# react事件

用于与第三方dom操作库同时使用的时候

这里说的事件指的是：React内置的Dom组件中的事件

1. 给document注册事件，
2. 几乎所有的元素的事件处理，均在document的事件中处理
    1. 一些不冒泡的事件，是直接在元素上监听
    2. 一些document上没有的事件，都是在元素上监听的
3. 在document的事件处理中，React会根据虚拟dom树的完成事件的函数的调用
4. react 事件中的事件参数e并非真实的事件参数e 而是类似于事件参数e
    1. stopPropagation 阻止的不是真实dom的事件冒泡，而是阻止的虚拟dom上的事件冒泡
    2. nativeEvent，可以得到真实的Dom事件对象
**注意事项**

1. 如果真实的dom注册事件，阻止了冒泡，则会导致react所有的事件都无法使用（原理就是给虚拟dom注册的事件本质上都是要冒泡到document中再处理）
2. 如果给真实的dom注册了事件，会先于react事件执行该事件
3. 通过react的事件中阻止事件冒泡，无法阻止真实的Dom事件冒泡
4. 可以通过navtiveEvent.stopImmeditatePropagation(),阻止其他的对于document的事件注册
5. 如果在事件处理程序中，不要异步的使用事件对象，如果一定要使用，需要调用e.persist函数来保存事件对象
6. 如果事件不冒泡的话