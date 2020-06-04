import { createActions, handleActions } from 'redux-actions';

export const { set, get } = createActions({
    GET: payload => payload,
    SET: type => type,
})

export default handleActions({
    // @ts-ignore
    [set]: (state, { payload }) => {
        console.log(payload);
        return [...state,payload]
    },
    // @ts-ignore
    [get]: (state, { payload }) => state.filter(it => it.type === payload.type)
}, [])