/*
 * @Author: your name
 * @Date: 2020-03-12 14:14:51
 * @LastEditTime: 2020-03-12 15:15:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\Redux\action\number.js
 */
import { createActions, handleActions } from 'redux-actions'

export const { autoIncrease, stopIncrease, increase, clearNumber, decrease } = createActions({
    AUTO_INCREASE: null,
    STOP_INCREASE: null,
    INCREASE: null,
    CLEAR_NUMBER: null,
    DECREASE: null
})
export default handleActions({
    [increase]: state => state + 1,
    [clearNumber]: state => 0,
    [decrease]: state => state - 1
}, 0)