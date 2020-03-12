/*
 * @Author: your name
 * @Date: 2020-03-12 14:14:51
 * @LastEditTime: 2020-03-12 15:15:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\Redux\action\number.js
 */
export const AUTOINCREASE = Symbol('number-autoIncrease');
export const STOPINCREASE = Symbol('number-stopIncrease');
export const INCREASE = Symbol('number-increase');
export const CLEARNUMBER = Symbol('number-clearnumber')
export function increase() {
    return {
        type: INCREASE
    }
}

export function autoIncrease() {
    return {
        type: AUTOINCREASE
    }
}
export function stopIncrease() {
    return {
        type: STOPINCREASE
    }
}
export function clearNumber() {
    return {
        type: CLEARNUMBER
    }
}