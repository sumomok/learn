/*
 * @Author: your name
 * @Date: 2020-03-10 16:20:27
 * @LastEditTime: 2020-03-12 14:21:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\Redux\reducer\index.js
 */
import user from './users';
import number from './number';
import { combineReducers } from 'redux';
export default combineReducers({
    user,
    number
})