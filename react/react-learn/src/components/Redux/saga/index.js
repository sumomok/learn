/*
 * @Author: your name
 * @Date: 2020-03-11 15:22:25
 * @LastEditTime: 2020-03-12 14:29:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\Redux\saga\index.js
 */
import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import numberSaga from './numberSaga';
// export default function* () {
//     let result = yield take(actionTypes.ADD);
//     console.log('第一次运行', result);
// }
export default function* () {
    let result = yield all([userSaga(), numberSaga()])
    console.log('完毕', result);
}