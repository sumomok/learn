import { SquareArr, IPoint } from "./types";
import Square from "./square";
import GameRule from "./GameRule";

/*
 * @Author: your name
 * @Date: 2020-04-01 16:55:40
 * @LastEditTime: 2020-04-02 15:17:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\Russia\src\core\squareGroup.ts
 */
export class SquareGroup {
    private readonly _squareGroup: SquareArr;

    public get center(): IPoint {
        return this._center
    }
    public get shape(): IPoint[] {
        return this._shape
    }
    public get squareGroup(): SquareArr {
        return this._squareGroup
    }
    private handleShape() {
        this._shape.forEach((it, i) => {
            this._squareGroup[i].point = {
                x: it.x + this._center.x,
                y: it.y + this._center.y
            }
        })
    }
    public set center(v: IPoint) {
        this._center = v;
        this.handleShape()
    }
    constructor(private _shape: IPoint[], private _center: IPoint, private _color: string) {
        let newArr: SquareArr = []
        this._shape.forEach(it => {
            let newPoint: IPoint = {
                x: it.x + this._center.x,
                y: it.y + this._center.y
            }
            let sq = new Square()
            sq.point = newPoint;
            sq.color = this._color;
            newArr.push(sq);
        })
        this._squareGroup = newArr
    }
    protected isClock = true;
    public rotate() {
        let result = this.createRoutateShape(this.isClock)
        if (!GameRule.judgeDoundary(result, this._center)) {
            this._shape = result;
            this.handleShape()
        }
    }
    private createRoutateShape(isClock: boolean) {
        let result;
        if (isClock) {
            result = this._shape.map(it => {
                let result: IPoint = {
                    x: - it.y,
                    y: it.x
                };
                return result
            })
        } else {
            result = this._shape.map(it => {
                let result: IPoint = {
                    x: it.y,
                    y: - it.x
                };
                return result
            })
        }
        return result

    }
}