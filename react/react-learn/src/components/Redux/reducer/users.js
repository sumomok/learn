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