import Square from "./square";
import { SquareGroup } from "./squareGroup";

/*
 * @Author: your name
 * @Date: 2020-04-01 14:44:44
 * @LastEditTime: 2020-04-02 17:05:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\Russia\src\core\types.ts
 */
export interface IPoint {
    readonly x: number
    readonly y: number
}
export interface IViewer {
    shwo(): void
    remove(): void
}
export type SquareArr = Square[]

export type TestArr = SquareGroup[]

export enum Direction {
    left,
    right,
    down
}
export enum GameState {
    init,
    playing,
    pause,
    playEnd
}
export interface GameShow {
    switchsSquare(nextTeris: SquareGroup): void,
    shwoNext(Teris: SquareGroup): void,
}