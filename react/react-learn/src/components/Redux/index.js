import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducer';
import * as actionTypes from './action/usersAction.js';
import uuid from 'uuid';


// 第一种创建带有中间件的store 这种比较常用
let store = createStore(reducer, applyMiddleware(logger));
// 第二种创建带有中间件的store
// let store = applyMiddleware(logger)(createStore)(reducer)
store.dispatch(actionTypes.getAddAction({ id: uuid(), name: "test" }))