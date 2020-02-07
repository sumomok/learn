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

关于首次渲染的情况，appear。appear-active、appear-done，他和enter的唯一区别在于完成时，会同事加入apear-done和enter-done

# React 动画（三）

SwitchTransition

用于有秩序的切换内部组件

默认情况下：out-in

1. 当key值改变时，会将之前的DOM根元素添加到退出样式（exit，exit-active）
2. 退出完成时，奖盖DOM元素移除
3. 重新渲染内部DOM元素
4. 为新渲染的DOM根元素添加进样式（enter，enter-active，enter-done）

in-out（先进入后退出）

1. 重新渲染内部DOM元素，保留之前的元素
2. 为新渲染的DOM根元素添加进入样式（enter，enter-active，enter-done）
3. 将之前的DOM根元素添加退出样式（exit，exit-active）
4. 退出完成后，将该DOM元素移除


