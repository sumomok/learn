/*
 * @Author: your name
 * @Date: 2020-04-02 16:19:30
 * @LastEditTime: 2020-04-02 17:39:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\Russia\src\core\Game.ts
 */

import { GameState, Direction, SquareArr } from "./types";
import { createTeris } from "./Teris";
import { SquareGroup } from "./squareGroup";
import GameRule from "./GameRule";
import { GameSquareShow } from "./squareShwo/GameSquareShow";
import Square from "./square";
function IsSquareGroup(obj: any): obj is SquareGroup {
    if (typeof obj === 'object') {
        return true
    } else {
        return false
    }
}
export class Game {
    private  _gameState: GameState = GameState.init;
    private _timer?: number;
    private _Teris?: SquareGroup;
    private _nextTeris: SquareGroup = createTeris();
    private _duration: number = 1000;
    private _Viewer: GameSquareShow;
    private _exists:SquareArr = [];

    get gameState (){
        return this._gameState;
    }
    set gameState(value){
        this._gameState = value;
    }
    constructor(Viewer: GameSquareShow) {
        this._Viewer = Viewer;
        this._Viewer.shwoNext(this._nextTeris)
    }
    public gameStart() {
        if (this._gameState === GameState.init) {
            this.switchTeris()
            this.autoDrop()
        }
    }
    private autoDrop() {
        if (this._timer && this._gameState === GameState.playEnd && IsSquareGroup(this._Teris)) {
            clearInterval(this._timer);
            return
        } else {
            if (this._Teris) {
                this._timer = setInterval(() => {
                    if (!GameRule.move(this._Teris as SquareGroup, Direction.down,this._exists)) {
                        this.handleButton()
                    }
                }, this._duration) as unknown as number
            }
        }

    }
    private switchTeris() {
        this._Teris = this._nextTeris;
        if(GameRule.judgeDoundary(this._Teris.shape,this._Teris.center,this._exists)){
            this._gameState = GameState.playEnd
            return
        }
        this._nextTeris = createTeris();
        this._Viewer.switchsSquare(this._Teris);
        this._Viewer.shwoNext(this._nextTeris);
    }
    public drop() {
        if (this._Teris) {
            while(GameRule.move(this._Teris, Direction.down,this._exists)){

            }
        }
    }
    public left() {
        if (this._Teris) {
            GameRule.move(this._Teris, Direction.left,this._exists)
        }
    }
    public right() {
        if (this._Teris) {
            GameRule.move(this._Teris, Direction.right,this._exists)
        }
    }
    public rotate(){
        this._Teris?.rotate()
    }
    private handleButton() {
        clearInterval(this._timer);
        this._exists.push(...this._Teris?.squareGroup);
        GameRule.deleteSquares(this._exists)
        this.switchTeris();
        this.autoDrop();
    }
}