/*
 * @Author: your name
 * @Date: 2020-03-10 16:20:27
 * @LastEditTime: 2020-03-12 14:12:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\Redux\reducer\users.js
 */
import * as user from '../action/usersAction';
export default (state = [], { type, payload }) => {
    switch (type) {
        case user.ADD:
            return [...state, payload];
        case user.DELETE:
            return state.filter(it => it.id !== payload);
        case user.EDIT:
            return state.map(it => it.id === payload.id ? { ...it, ...payload } : it)
        default:
            return state
    }
}