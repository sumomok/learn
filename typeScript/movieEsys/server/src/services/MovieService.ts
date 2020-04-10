import { Movie } from "../model/Movie";
import { MovieModel } from "../db";
import { SearchCondition } from "../model/searchCondition";
import { IMovie } from "../types/Movie";
import { IResult } from "../types/result";

export class MovieService {
    public static async add(movie: Movie): Promise<IMovie | string[]> {
        // 1.类型转换
        const m = Movie.transform(movie)
        console.log(m);
        // 2.数据验证
        const result = await m.validateThis();
        if (result.length > 0) {
            return result
        }
        // 3. 添加到数据库
        return await MovieModel.create(m)
    }
    public static async edit(id: string, movie: Movie): Promise<string[]> {
        // 1.类型转换
        const m = Movie.transform(movie)
        // 2.数据验证
        const result = await m.validateThis(true);
        if (result.length > 0) {
            return result
        }
        await MovieModel.updateOne({ _id: id }, movie)
        return []
    }
    public static async delete(id: string): Promise<void> {
        await MovieModel.deleteOne({ _id: id })
    }
    public static async findById(id: string): Promise<IMovie | null> {
        return MovieModel.findById(id)
    }
    public static async find(searInfo: SearchCondition): Promise<IResult<IMovie>> {
        // 1.类型转换
        const m = SearchCondition.transform(searInfo)
        // 2.数据验证
        const error = await m.validateThis(true);
        let movies;
        let count
        if (error.length < 0) {
            count = await MovieModel.find({ name: { $regex: new RegExp(m.key) } }).countDocuments();
            movies = await MovieModel.find({ name: { $regex: new RegExp(m.key) } }).skip((m.page - 1) * m.limit).limit(m.limit)
        }
        // 3.查询
        return {
            count,
            movies,
            error
        };
    }
}