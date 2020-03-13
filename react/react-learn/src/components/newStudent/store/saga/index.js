// 引入all指令，监听所有生成器函数
import { all } from 'redux-saga/effects'
//此处放分模块的生成器函数
import studentSaga from './student';

// 导出该生成器函数
export default function* () {
    console.log('test');
    yield all([studentSaga()]);
}