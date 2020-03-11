/*
 * @Author: your name
 * @Date: 2020-03-11 16:58:58
 * @LastEditTime: 2020-03-11 17:53:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\Redux\saga\userSaga.js
 */
import * as actionTypes from '../action/usersAction'
import { takeEvery } from 'redux-saga/effects';

export default function* () {
    yield takeEvery(actionTypes.ADD, add);
    yield takeEvery(actionTypes.ADD, add);
}
function* add() {
}