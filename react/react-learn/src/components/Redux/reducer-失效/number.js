/*
 * @Author: your name
 * @Date: 2020-03-12 14:13:38
 * @LastEditTime: 2020-03-12 14:43:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\Redux\reducer\number.js
 */
import * as actionTypes from '../action/number';
const initialState = {
    number: 0,
}

export default (state = initialState, { type }) => {
    switch (type) {
        case actionTypes.INCREASE:
            return {
                number: state.number + 1
            }
        case actionTypes.CLEARNUMBER:
            return 0
        default:
            return state
    }
}
