/*
 * @Author: your name
 * @Date: 2020-03-10 16:20:27
 * @LastEditTime: 2020-03-12 19:42:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\Redux\index.js
 */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './action';
import { autoIncrease, stopIncrease } from './action/number.js';
import creatorSagaMidwaer from 'redux-saga';
import rootTask from './saga/index'

let saga = creatorSagaMidwaer();
// 第一种创建带有中间件的store 这种比较常用
let store = createStore(reducer, applyMiddleware(saga, logger));
// 第二种创建带有中间件的store
// let store = applyMiddleware(logger)(createStore)(reducer)

saga.run(rootTask);
window.autoIncrease = () => {
    store.dispatch(autoIncrease());
}
window.stopIncrease = () => {
    store.dispatch(stopIncrease());
}
// store.dispatch(actionTypes.getAddAction({ id: uuid(), name: "test" }));
