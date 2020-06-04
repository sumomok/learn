// 导入reducer组合函数
import { combineReducers } from 'redux'
//此处引入分模块的reducer函数
import device from './device'

//导出组合好的reducer函数
export default combineReducers({
    device
});
export { set,get } from './device'