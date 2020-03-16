/*
 * @Author: your name
 * @Date: 2019-12-31 08:48:22
 * @LastEditTime: 2020-03-16 16:26:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\index.js
 */
import React from 'react';
// import ReactDOM from 'react-dom';
// import Form from './components/form';
// import Func from './components/defaultprops';
// import Test from './components/banner/Test';
// import ForwordRef from './components/formRef';
// import OldContext from './components/oldContext';
// import Form from './components/FormComp/index';
// import HookState from './components/HOOK';
// import StudentContainer from './components/HOOK/studentList';
// import Test1 from './components/HOOK/callBack';
// import Test from './components/React-transition/index.js';
// import App from './components/MyRouter';
// import './components/MyRouter/createBorwserHistory';
// import App from './components/newStudent/components/App'
// import './components/Redux'
//引入dva
import dva from 'dva';
import App from './components/Dva';
import modelObj from './components/Dva/numberModel';
import { createBrowserHistory } from 'history'
//创建dva应用程序
const app = dva({
    history: createBrowserHistory()
});
//路由加载app
app.router(App);
// model可以执行多次 传入多个数据模型
app.model(modelObj)
// 开启dva应用程序 类似于: ReactDom.render(react元素，根组件)
app.start('#root');




// ReactDOM.render(<h1>test</h1>, document.getElementById('root'));
