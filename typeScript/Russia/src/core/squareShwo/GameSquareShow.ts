/*
 * @Author: your name
 * @Date: 2020-04-02 16:29:57
 * @LastEditTime: 2020-04-02 17:32:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\Russia\src\core\squareShwo\GameSquareShow.ts
 */

import { GameShow } from "../types";
import ShwoSquare from "./SquareShwo";
import $ from 'jquery';
import { Game } from "../Game";

export class GameSquareShow implements GameShow {
    init(Game: Game): void {
        // 设置宽高
        // 注册键盘事件
    }
    shwoNext(Teris: import("../squareGroup").SquareGroup): void {
        Teris.squareGroup.forEach(it => {

            it.viewer = new ShwoSquare(it, $('#Tip'))
        })
    }
    switchsSquare(nextTeris: import("../squareGroup").SquareGroup): void {
        nextTeris.squareGroup.forEach(it => {
            it.viewer?.remove()
            it.viewer = new ShwoSquare(it, $('#Teris'))
        })
    }

}