/*
 * @Author: your name
 * @Date: 2020-04-01 17:55:18
 * @LastEditTime: 2020-04-01 17:57:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\Russia\src\core\util.ts
 */
export function getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
}