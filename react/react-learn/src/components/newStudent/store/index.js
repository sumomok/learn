// 用于创建数据仓库 createStore 为创建store函数，applymiddleware 为加载中间件
import { createStore, applyMiddleware } from 'redux';
// 默认导出一个saga创建函数
import creatoreSgag from 'redux-saga';
// 日志导出函数
import logger from 'redux-logger';
// 总的reducer
import reducer from './action'
// 总的saga
import rootsaga from './saga'
// 创建saga
import { fetchData } from './action';
let saga = creatoreSgag();
// 创建数据仓库，第一次传递中间件，第二次传递仓库创建函数，第三次传递reducer
let store = applyMiddleware(saga, logger)(createStore)(reducer);
// saga运行生成器函数，执行监听
saga.run(rootsaga)
// 导出store

// 测试
store.dispatch(fetchData());

export default store