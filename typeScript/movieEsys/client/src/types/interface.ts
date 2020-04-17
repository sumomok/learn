/*
 * @Author: your name
 * @Date: 2020-04-14 08:43:58
 * @LastEditTime: 2020-04-14 17:19:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\movieEsys\client\src\types\interface.ts
 */
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
export interface IRootState {
    movie: IMovieState
}
export interface IMovieTableEvent {
    onLoad: () => void,
    onSwitchChange: (id: string, newState: boolean, type: SwitchType) => void,
    onDelete: (id: string) => void
    onPageChange: (condition: IMovieCondition) => void,
    onConditionChange: (condition: IMovieCondition) => void
}

export enum SwitchType {
    isHot,
    isClasic,

}
export interface IResult<T> { data: T[], count: number, error: string[] }