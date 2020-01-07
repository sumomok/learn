<!--
 * @Author: your name
 * @Date: 2020-01-02 16:43:21
 * @LastEditTime : 2020-01-02 17:26:29
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react_md\转发ref.md
 -->
#   Ref转发

forwardRef

forwardRef方法：

1.参数，传递的是函数组件，不能是类组件，并且，函数组件需要有第二哥参数来得到ref
2.返回值，返回一个新的组件

forwardRef ref转发的使用场景  
1. 直接拿到函数组件中的渲染的真实dom
2. 使用高阶组件的时候将ref从指向外部组件转换到指向实际用到的组件

