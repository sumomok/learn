/*
 * @Author: your name
 * @Date: 2020-03-11 16:58:58
 * @LastEditTime: 2020-03-12 14:36:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\Redux\saga\userSaga.js
 */
import * as actionTypes from '../action/usersAction'
import { takeEvery, call, put, cps } from 'redux-saga/effects';
import uuid from 'uuid';

export default function* () {
    yield takeEvery(actionTypes.FEATCHDATA, add);

}
function* fetch() {
    // promise 模式 如果传入传统回调函数模式会立即执行
    let result = yield call(["abc", fetchData]);
    // 传统回调函数模式 如果传入promise模式 则不会执行promise模式的返回值
    // let result = yield cps(fetchData);
    yield put(actionTypes.getAddAction(result));
}
// Promise模式
function fetchData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                res(null, { id: uuid(), name: "test" })
            } else {
                rej("出错了")
            }
        }, 2000)
    })
}
// 传统回调模式
// function fetchData(callback) {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             callback(null, { id: uuid(), name: "test" })
//         } else {
//             callback("出错了")
//         }
//     }, 3000)
// }