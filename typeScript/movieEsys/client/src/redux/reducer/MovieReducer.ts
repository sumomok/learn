import { IMovieState, defaultState } from "../../types/interface";
import { MovieAction, SaveMoviesAction, DeleteActions, SetConditionAction, Setloading } from "../action/MovieAction";
import { Reducer } from "react";


const saveMovie: Reducer<IMovieState, SaveMoviesAction> = (state, { payload, type }): IMovieState => {
    return {
        ...state,
        data: payload.movies,
        count: payload.total
    }
}
const DeleteReducer: Reducer<IMovieState, DeleteActions> = (state, { type, payload }): IMovieState => {
    let newState = { ...state }

    let deleteMovie = newState.data.find(it => {
        return it._id === payload
    })
    if (deleteMovie) {
        let index = newState.data.indexOf(deleteMovie)
        newState.data.splice(index, 1)
    }
    return newState
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

export default function movies(state: IMovieState = defaultState, action: MovieAction) {
    if (state) {
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
        default:
            return state
    }

}