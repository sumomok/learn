
export interface IMovie {
    _id?: string
    name: string
    type: string[]
    areas: string[]
    timeLong: number
    isHot: boolean
    isClasic: boolean
    description?: string
    poster?: string
}
export interface IRequestResult<T> {
    error: string,
    Data: T,
    Success: boolean
}
export interface IRequestResultByPage<T> {
    error: string,
    Data: T[],
    Success: boolean,
    count: number
}
export interface ISearchCondition {
    page?: number
    limit?: number
    key?: string
}
export interface IAction<T extends string, A> {
    type: T,
    payload: A
}
export type IMovieCondition = Required<ISearchCondition>
export interface IMovieState {
    data: IMovie[],
    condition: IMovieCondition,
    count: number,
    isLoading: boolean,
}
export const defaultState: IMovieState = {
    data: [],
    condition: {
        limit: 10,
        page: 1,
        key: ""
    },
    count: 0,
    isLoading: false
}