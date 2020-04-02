import { IViewer } from "../types";
import Square from "../square";
import $ from 'jquery'
import { squareConfig } from "./squareConfig";

/*
 * @Author: your name
 * @Date: 2020-04-01 15:31:58
 * @LastEditTime: 2020-04-02 09:57:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\Russia\src\core\squareShwo\SquareShwo.ts
 */
export default class ShwoSquare implements IViewer {
    private createSquare?: JQuery<HTMLElement>
    private IsRomove: boolean = false
    shwo(): void {
        if (this.IsRomove) {
            return
        }
        if (!this.createSquare) {
            this.createSquare = $('<div></div>')
            this.createSquare.css({
                position: "absolute",
                width: squareConfig.squareSize.width,
                height: squareConfig.squareSize.height,
                background: this.square.color,
                left: this.square.point.x * squareConfig.squareSize.width,
                top: this.square.point.y * squareConfig.squareSize.height,
                border: "1px solid #ccc",
                boxSizing: "border-box",
            })
            this.root.append(this.createSquare);
        } else {
            this.createSquare.css({
                left: this.square.point.x * squareConfig.squareSize.width,
                top: this.square.point.y * squareConfig.squareSize.height
            })
        }

    }
    remove(): void {
        if (this.createSquare) {
            this.createSquare.remove()
            this.IsRomove = true
        }

    }
    constructor(private square: Square, private root: JQuery<HTMLElement> = $('#root')) {

    }

}