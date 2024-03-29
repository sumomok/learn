/*
 * @Author: your name
 * @Date: 2020-04-08 16:42:51
 * @LastEditTime: 2020-04-08 16:46:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\movieEsys\server\src\index.ts
 */
import "reflect-metadata";
import Express from 'express';
import { router } from "./routes/MovieRoute";
import { router as UploadRouter } from './routes/UploadRoute'
import history from 'connect-history-api-fallback';
// 数据库处理
// MovieModel.find().then(ms => {
//     console.log(ms)
// })
// express
// 验证： class-validator

// const m: any = {
//     name: "test",
//     type: ['喜剧'],
//     areas: ["中国大陆"],
//     timeLong: 2
// };
// const m: any = {
//     name: "流浪地球",
// };
// 将plain object转换为movie对象
// const movie = plainToClass(Movie, m)
// 开始验证
// movie.validateThis().then(error => console.log(error))
// validate(m).then(error => {
//     console.log(error);
// })


// 数据库添加测试
// MovieService.findById("5e8ee6394123d5201835dde1").then(result => {
//     console.log(result);
// })

// 服务器测试
const app = Express()
// 使用postman进行测试
app.use(history());
app.use("/", Express.static("public/build"))
app.use("/Upload", Express.static("../public/upload"))
app.use(Express.json());
app.use("/api/movie", router)
app.use("/api/upload", UploadRouter)

app.listen(3000)