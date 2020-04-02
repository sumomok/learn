/*
 * @Author: your name
 * @Date: 2020-04-02 16:19:30
 * @LastEditTime: 2020-04-02 17:39:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\Russia\src\core\Game.ts
 */

import { GameState, Direction } from "./types";
import { createTeris } from "./Teris";
import { SquareGroup } from "./squareGroup";
import GameRule from "./GameRule";
import { GameSquareShow } from "./squareShwo/GameSquareShow";
function IsSquareGroup(obj: any): obj is SquareGroup {
    if (typeof obj === 'object') {
        return true
    } else {
        return false
    }
}
export class Game {
    private _gameState: GameState = GameState.init;
    private _timer?: number;
    private _Teris?: SquareGroup;
    private _nextTeris: SquareGroup = createTeris();
    private _duration: number = 1000;
    private _Viewer: GameSquareShow
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
        if (this._timer && this._gameState !== GameState.playing && IsSquareGroup(this._Teris)) {
            return
        } else {
            if (this._Teris) {
                this._timer = setInterval(() => {
                    if (!GameRule.move(this._Teris as SquareGroup, Direction.down)) {
                        this.handleButton()
                    }
                }, this._duration)
            }
        }

    }
    private switchTeris() {
        this._Teris = this._nextTeris;
        this._nextTeris = createTeris();
        this._Viewer.switchsSquare(this._Teris);
        this._Viewer.shwoNext(this._nextTeris);
    }
    public drop() {
        if (this._Teris) {
            GameRule.move(this._Teris, Direction.down)
        }
    }
    public left() {
        if (this._Teris) {
            GameRule.move(this._Teris, Direction.left)
        }
    }
    public right() {
        if (this._Teris) {
            GameRule.move(this._Teris, Direction.right)
        }
    }
    private handleButton() {
        clearInterval(this._timer);
        this._timer = undefined;
        this.switchTeris();
        this.autoDrop();
    }
}