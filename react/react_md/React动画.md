# React 动画（一）

React动画库：react-transition-group
组件：Transition

# React 动画（二）

CSSTransition

当进入时，发生：

1. 为CSSTransition内部的Dom根元素添加样式 enter
2. 在下一帧（enter样式完全应用到元素，立即为该元素添加样式enter-active）
3. 当timeout结束后，去掉值钱的样式，添加样式enter-done

当退出时，发生

1. 为CSSTransition内部的DOM根元素添加样式exit
2. 在下一帧（enter样式完全应用到元素），立即为该元素添加样式exit-active
3. 当timeout结束后，去掉值钱的样式，添加样式exit-done

设置classNames属性，可以指定耒阳市的名称

1. 字符串：为耒阳市添加前缀
2. 对象: 为每个耒阳市指定具体的名称（非前缀）

关于首次渲染的耒阳市，appear。appear-active、appear-done，他和enter的唯一区别在于完成时，会同事加入apear-done和enter-done


