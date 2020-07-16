import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducer';
import creatorSagaMidwaer from 'redux-saga';
// import {set} from './reducer'
let saga = creatorSagaMidwaer();
// 第一种创建带有中间件的store 这种比较常用
let store = createStore(reducer, applyMiddleware(saga, logger));
// 第二种创建带有中间件的store
// let store = applyMiddleware(logger)(createStore)(reducer)

// saga.run(rootTask);

// store.dispatch(set({ type: "PRT", device: {} }));
export default store
