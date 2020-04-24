import { IAction, IMovie, IMovieCondition, SwitchType } from "../../types/interface";

export type SaveMoviesAction = IAction<"movie_save", {
    movies: IMovie[]
    total: number
}>
export function saveMovieAction(movies: IMovie[], total: number): SaveMoviesAction {
    return {
        type: "movie_save",
        payload: {
            movies,
            total
        }
    }
}
export type Setloading = IAction<"set_loading", {
    loading: boolean
}>
export function setLonding(loading: boolean): Setloading {
    return {
        type: "set_loading",
        payload: {
            loading
        }
    }
}
export type SetConditionAction = IAction<"movie_setCondition", {
    condition: IMovieCondition
}>
export function setSearchCondition(searchCondition: IMovieCondition): SetConditionAction {
    return {
        type: "movie_setCondition",
        payload: {
            condition: searchCondition
        }
    }
}
export type DeleteActions = IAction<"movie_delete", string>
export function deleteAction(id: string): DeleteActions {
    return {
        type: "movie_delete",
        payload: id
    }
}
export type Featch_Movie_Page = IAction<"Movie_Saga_Page", null | {
    condition: IMovieCondition
}>
export type Featch_Movie_Add = IAction<"Movie_Saga_Add", {
    params: IMovie,
    cb: () => void
}>
export type Featch_Movie_Edit = IAction<"Featch_Movie_Edit", {
    id: string,
    params?: IMovie,
    cb: () => void
}>
export type Featch_Movie_Delete = IAction<"Featch_Movie_Delete", {
    id: string
}>
export type Featch_Movie_FindById = IAction<"Featch_Movie_FindById", {
    id: string,
    cb: (data: IMovie) => void
}>

export type Change_Switch = IAction<"Change_Switch", {
    id: string,
    type: SwitchType,
    newState: boolean
}>



export type MovieAction = SaveMoviesAction | Setloading | SetConditionAction | DeleteActions | Featch_Movie_Page | Featch_Movie_Add | Featch_Movie_Edit | Featch_Movie_Delete | Featch_Movie_FindById | Change_Switch