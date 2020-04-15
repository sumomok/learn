import { IMovieState, defaultState, SwitchType } from "../../types/interface";
import { MovieAction, SaveMoviesAction, DeleteActions, SetConditionAction, Setloading, Change_Switch } from "../action/MovieAction";
import { Reducer } from "react";


const saveMovie: Reducer<IMovieState, SaveMoviesAction> = (state, { payload, type }): IMovieState => {
    return {
        ...state,
        data: payload.movies,
        count: payload.total
    }
}
const DeleteReducer: Reducer<IMovieState, DeleteActions> = (state, { type, payload }): IMovieState => {
    let newState = [...state.data]

    let deleteMovie = newState.find(it => {
        return it._id === payload
    })

    if (deleteMovie) {
        let index = newState.indexOf(deleteMovie)
        newState.splice(index, 1)
        console.log(newState)
    }
    return {
        ...state,
        data: newState
    }
}
const setLoading: Reducer<IMovieState, Setloading> = (state, { payload, type }): IMovieState => {
    return {
        ...state,
        isLoading: payload.loading
    }
}
const setCondition: Reducer<IMovieState, SetConditionAction> = (state, { payload, type }): IMovieState => {
    return {
        ...state,
        condition: payload.condition
    }
}
const changeSwitch: Reducer<IMovieState, Change_Switch> = (state, { payload, type }): IMovieState => {
    let newState = [...state.data]
    newState.forEach(it => {
        if (it._id === payload.id) {
            if (payload.type === SwitchType.isHot) {
                it.isHot = payload.newState
            } else if (payload.type === SwitchType.isClasic) {
                it.isClasic = payload.newState
            }
        }
    })
    return {
        ...state,
        data: newState
    }
}
export default function movies(state: IMovieState = defaultState, action: MovieAction) {
    if (!state) {
        state = defaultState
    }
    switch (action.type) {
        case "movie_delete":
            return DeleteReducer(state, action)

        case "movie_save":
            return saveMovie(state, action)

        case "movie_setCondition":
            return setCondition(state, action)

        case "set_loading":
            return setLoading(state, action)
        case "Change_Switch":
            return changeSwitch(state, action)
        default:
            return state
    }

}