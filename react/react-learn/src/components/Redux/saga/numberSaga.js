/*
 * @Author: your name
 * @Date: 2020-03-12 14:23:33
 * @LastEditTime: 2020-03-12 16:44:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\Redux\saga\numberSaga.js
 */
import * as actionTypes from '../action/number';
import { fork, take, delay, put, race, call } from 'redux-saga/effects';

function* autoIncrease() {
    while (true) {
        yield race({
            increase: call(function* () {
                yield take(actionTypes.AUTOINCREASE);
                while (true) {
                    yield delay(2000)
                    yield put(actionTypes.increase())
                }
            }),
            cancel: call(function* () {
                yield take(actionTypes.STOPINCREASE)
            })
        })
    }
}

// 妙啊！！！  符合逻辑思路 sagaNB
// function* autoIncrease() {
//     let task;
//     while (true) {
//         yield take(actionTypes.AUTOINCREASE);
//         task = yield fork(function* () {
//             while (true) {
//                 yield delay(2000);
//                 yield put(actionTypes.increase());
//             }
//         })
//         yield take(actionTypes.STOPINCREASE);
//         yield cancel(task);
//     }
// }
// 传统取消方式
// let taskFork = null;
// function* autoIncrease() {
//     while (true) {
//         yield take(actionTypes.AUTOINCREASE)
//         yield* stopTask()
//         taskFork = yield fork(function* () {
//             while (true) {
//                 yield delay(1000)
//                 yield put(actionTypes.increase());
//             }
//         })
//     }
// }

// function* stopTask() {
//     if (taskFork) {
//         yield cancel(taskFork);
//     }
// }
export default function* () {
    yield fork(autoIncrease);
    // yield takeEvery(actionTypes.STOPINCREASE, stopTask)
}