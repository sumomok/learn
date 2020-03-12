/*
 * @Author: your name
 * @Date: 2020-03-10 16:20:27
 * @LastEditTime: 2020-03-12 14:37:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editx
 * @FilePath: \learn\react\react-learn\src\components\Redux\action\usersAction.js
 */
export const ADD = Symbol('user-add');
export const EDIT = Symbol('user-edit');
export const DELETE = Symbol('user-Delete');
export const FEATCHDATA = Symbol('user-FEATCHDATA');


export function getAddAction(user) {
    return {
        type: ADD,
        payload: user
    }
}
export function getEditAction(id, action) {
    return {
        type: EDIT,
        payload: { id, ...action }
    }
}
export function getDeleteAction(id) {
    return {
        type: DELETE,
        payload: id
    }
}
export function featchData() {
    return {
        type: FEATCHDATA
    }
}
