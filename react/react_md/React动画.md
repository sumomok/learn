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


