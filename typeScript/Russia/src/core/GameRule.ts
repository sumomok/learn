import { SquareGroup } from "./squareGroup";
import { IPoint, Direction } from "./types";
import { GameRuleConfig } from "./GameRule.config";
function IsPoint(obj: any): obj is IPoint {
    if (typeof obj.x === "number") {
        return true
    } else {
        return false
    }
}

/*
 * @Author: your name
 * @Date: 2020-04-02 09:49:58
 * @LastEditTime: 2020-04-02 17:37:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\Russia\src\core\GameRule.ts
 */
export default class GameRule {
    /**
     * 对整体进行移动
     * @param teris 小方块组
     * @param center 中心点坐标
     */
    static move(teris: SquareGroup, direction: Direction): boolean
    static move(teris: SquareGroup, target: IPoint): boolean
    static move(teris: SquareGroup, target: IPoint | Direction) {
        var result;
        if (IsPoint(target)) {
            result = target;
            if (this.judgeDoundary(teris.shape, result)) {
                return false
            }
            teris.center = result
            return true
        } else {
            result = {
                x: teris.center.x,
                y: teris.center.y
            }
            if (target === Direction.down) {
                result = {
                    x: teris.center.x,
                    y: teris.center.y + 1
                }
            }
            if (target === Direction.left) {
                result = {
                    x: teris.center.x - 1,
                    y: teris.center.y
                }
            }
            if (target === Direction.right) {
                result = {
                    x: teris.center.x + 1,
                    y: teris.center.y
                }
            }
            if (this.judgeDoundary(teris.shape, result)) {
                return false
            } else {
                teris.center = result;
                return true;
            }
        }


    }
    static judgeDoundary(shape: IPoint[], center: IPoint) {
        return shape.some(it => {
            let newIt = {
                x: it.x + center.x,
                y: it.y + center.y,
            }
            if (newIt.x >= 0 && newIt.x < GameRuleConfig.TerisSize.width && newIt.y >= 0 && newIt.y < GameRuleConfig.TerisSize.height) {
                return false
            } else {
                return true
            }
        })
    }
}