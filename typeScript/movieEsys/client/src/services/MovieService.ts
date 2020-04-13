import axios from 'axios'
import { IMovie, IRequestResult, ISearchCondition } from '../types/interface'
export class RequestMovie {
    public static async add(params: IMovie): Promise<IRequestResult<IMovie | string[]>> {
        const { data } = await axios.post<IRequestResult<IMovie>>("/api/movie/add", params)
        return data
    }
    public static async edit(Id: string, params: IMovie) {
        const { data } = await axios.put("/api/movie/" + Id, params)
        return data
    }
    public static async delete(Id: string) {
        const { data } = await axios.delete<IRequestResult<IMovie>>("/api/movie/" + Id)
        return data
    }
    public static async findById(Id: string) {
        const { data } = await axios.get<IRequestResult<IMovie>>("/api/movie/" + Id)
        return data
    }
    public static async findByPage(params: ISearchCondition) {
        const { data } = await axios.get<IRequestResult<IMovie[]>>("/api/movie", { params })
        return data
    }
}