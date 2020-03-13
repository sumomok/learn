/*
 * @Author: your name
 * @Date: 2020-03-10 16:20:27
 * @LastEditTime: 2020-03-12 14:37:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editx
 * @FilePath: \learn\react\react-learn\src\components\Redux\action\usersAction.js
 */

import { createActions, handleActions } from 'redux-actions'

export const { add, deletes, edit, fetchData } = createActions({
    ADD: user => user,
    DELETES: id => id,
    EDIT: (id, action) => ({ id, ...action }),
    FETCH_DATA: null
})

export default handleActions({
    [add]: (state, { payload }) => [...state, payload],
    [deletes]: (state, { payload }) => state.filter(it => it.id !== payload),
    [edit]: (state, { payload }) => state.map(it => it.id === payload.id ? { ...it, ...payload } : it),
}, [{ id: "12312", name: "3123" }])