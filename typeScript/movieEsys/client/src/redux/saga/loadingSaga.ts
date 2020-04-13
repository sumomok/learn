import { Setloading } from "../action/MovieAction"
import { put } from "redux-saga/effects"


export const loading = function* (isLoading: boolean) {
    yield put<Setloading>({ type: "set_loading", payload: { loading: isLoading } })
}