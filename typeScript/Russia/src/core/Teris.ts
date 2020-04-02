import { IPoint } from "./types";
import { getRandom } from "./util";
import { SquareGroup } from "./squareGroup";

/*
 * @Author: your name
 * @Date: 2020-04-01 17:48:43
 * @LastEditTime: 2020-04-02 17:25:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\Russia\src\core\teris.ts
 */
// const Lshape: IPoint[] = [
//     { x: -2, y: 0 },
//     { x: -1, y: 0 },
//     { x: 0, y: 0 },
//     { x: 0, y: -1 }
// ]
class Lshape extends SquareGroup {
    constructor(_center: IPoint, _color: string) {
        super(
            [
                { x: -2, y: 0 },
                { x: -1, y: 0 },
                { x: 0, y: 0 },
                { x: 0, y: -1 }
            ],
            _center,
            _color
        )
    }
}
class Sshape extends SquareGroup {
    constructor(_center: IPoint, _color: string) {
        super(
            [
                { x: -1, y: 0 },
                { x: 0, y: 0 },
                { x: 0, y: -1 },
                { x: 1, y: -1 }
            ],
            _center,
            _color
        )
    }
    rotate() {
        super.rotate()
        this.isClock = !this.isClock;
    }
}
class squareShape extends SquareGroup {
    constructor(_center: IPoint, _color: string) {
        super(
            [
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 1, y: 1 },
                { x: 0, y: 1 }
            ],
            _center,
            _color
        )
    }
    rotate() {
        return;
    }
}
class LineShape extends SquareGroup {
    constructor(_center: IPoint, _color: string) {
        super(
            [

                { x: -1, y: 0 },
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 2, y: 0 }
            ],
            _center,
            _color
        )
    }
    rotate() {
        super.rotate()
        this.isClock = !this.isClock;
    }
}
class TShape extends SquareGroup {
    constructor(_center: IPoint, _color: string) {
        super(
            [
                { x: -1, y: 0 },
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 0, y: -1 }
            ],
            _center,
            _color
        )
    }
}
const shapeArr = [
    TShape,
    LineShape,
    squareShape,
    Sshape,
    Lshape
]
const colors: string[] = [
    "red",
    "blue",
    "orange",
    "cadetblue"
]
export function createTeris() {
    let shapes = shapeArr[getRandom(0, shapeArr.length)];
    let color = colors[getRandom(0, colors.length)];
    let center: IPoint = {
        x: getRandom(2, 5),
        y: getRandom(1, 3),
    }
    return new shapes(center, color);
}