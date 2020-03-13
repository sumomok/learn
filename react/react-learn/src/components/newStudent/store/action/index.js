// 导入reducer组合函数
import { combineReducers } from 'redux'
//此处引入分模块的reducer函数
import student from './studentData'

//导出组合好的reducer函数
export default combineReducers({
    student
});

export { add, fetchData, edit, deleteStudent } from './studentData'