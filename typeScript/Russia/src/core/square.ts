import { IPoint, IViewer } from "./types";

/*
 * @Author: your name
 * @Date: 2020-04-01 11:15:40
 * @LastEditTime: 2020-04-01 17:27:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\Russia\src\test.ts
 */
export default class Square {
    private _point: IPoint = {
        x: 0,
        y: 0
    }
    private _color: string = ""
    private _viewer?: IViewer
    public get point() {
        return this._point
    }
    public set point(value) {
        this._point = value
        if (this._viewer) {
            this._viewer.shwo()
        }
    }
    public get color() {
        return this._color
    }
    public set color(value) {
        this._color = value
    }
    public get viewer() {
        return this._viewer
    }
    public set viewer(value) {
        this._viewer = value
        if (this._viewer) {
            this._viewer.shwo()
        }
    }
}