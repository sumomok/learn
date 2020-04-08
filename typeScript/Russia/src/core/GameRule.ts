import { SquareGroup } from "./squareGroup";
import { IPoint, Direction, SquareArr } from "./types";
import { GameRuleConfig } from "./GameRule.config";
import { Game } from "./Game";
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
    static move(teris: SquareGroup, direction: Direction, exists?: SquareArr): boolean
    static move(teris: SquareGroup, target: IPoint, exists?: SquareArr): boolean
    static move(teris: SquareGroup, target: IPoint | Direction, exists?: SquareArr) {
        var result;
        if (IsPoint(target)) {
            result = target;
            if (this.judgeDoundary(teris.shape, result, exists)) {
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
            if (this.judgeDoundary(teris.shape, result, exists)) {
                return false
            } else {
                teris.center = result;
                return true;
            }
        }


    }
    static judgeDoundary(shape: IPoint[], center: IPoint, exists?: SquareArr) {
        return shape.some(it => {
            let newIt = {
                x: it.x + center.x,
                y: it.y + center.y,
            }
            if (newIt.x >= 0 && newIt.x < GameRuleConfig.TerisSize.width && newIt.y >= 0 && newIt.y < GameRuleConfig.TerisSize.height) {
                if (exists) {
                    if (
                        exists.some(({ point }) => {
                            return (newIt.x === point.x && newIt.y === point.y)
                        })
                    ) {
                        return true
                    }
                }
                return false
            } else {
                return true
            }
        })
    }
    /**
     *  得到这一Y坐标下所有的方块
     * @param exists 
     * @param y 
     */
    static getLineSquare(exists: SquareArr, y: number) {
        return exists.filter(sq => {
            return sq.point.y === y
        })
    }
    /**
     * 删除连成一行的小方块
     * @param exists 
     */
    static deleteSquares(exists: SquareArr) {
        // 获取所有Y坐标
        let squerY: number[] = exists.map(sq => sq.point.y)
        let minY = Math.min(...squerY);
        let maxY = Math.max(...squerY);
        for (let y = minY; y <= maxY; y++) {
            // 取消小方块显示
            // 获取这一行的小方块
            let sqs = this.getLineSquare(exists, y);
            if (sqs.length === GameRuleConfig.TerisSize.width) {
                sqs.forEach(it => {
                    it.viewer?.remove()
                    // console.log(exists);
                    const index = exists.indexOf(it);
                    exists.splice(index, 1);
                })
                exists.filter(sq => sq.point.y < y).forEach(test => {
                    console.log(test.point)
                    test.point = {
                        x: test.point.x,
                        y: test.point.y + 1
                    }
                    console.log(test.point)
                })

            }
        }
    }
}