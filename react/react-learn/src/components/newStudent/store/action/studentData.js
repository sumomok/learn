// 导入创建生成action函数，和创建生成reducer函数
import { createActions, handleActions } from 'redux-actions';

export const { fetchData, add, edit, deleteStudent } = createActions({
    FETCH_DATA: null,
    ADD: studentData => studentData,
    EDIT: (id, payload) => ({ id, ...payload }),
    DELETE_STUDENT: id => id,
})

export default handleActions({
    [add]: (state, { payload }) => [...state, ...payload],
    [edit]: (state, { payload }) => state.map(it => it.id === payload.id ? payload : it),
    [deleteStudent]: (state, { payload }) => state.filter(it => it.id !== payload.id)
}, [{ id: "1231", name: "test" }])