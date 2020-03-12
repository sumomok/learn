export const ADD = Symbol('user-add');
export const EDIT = Symbol('user-edit');
export const DELETE = Symbol('user-Delete');
export const FETCH = Symbol('user-fetch');

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
export function fetchData() {
    return {
        type: FETCH
    }
}