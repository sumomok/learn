import { Game } from "./core/Game";
import { GameSquareShow } from "./core/squareShwo/GameSquareShow";
import $ from 'jquery'

/*
 * @Author: your name
 * @Date: 2020-04-01 09:08:28
 * @LastEditTime: 2020-04-02 17:40:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\Russia\src\index.js
 */
let G = new Game(new GameSquareShow())
G.gameStart()
$('#right').click(()=>{
    G.right()
})
$('#left').click(()=>{
    G.left()
})
$('#down').click(()=>{
    G.drop()
})
$('#routater').click(()=>{
    G.rotate()
})