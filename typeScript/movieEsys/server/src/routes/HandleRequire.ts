import { Response } from "express";
import { IResult } from "../types/result";

export class HandleRequest {
    public static sendResult(Data: any, error: string | null, res: Response, Success: boolean) {
        res.send({
            error,
            Data,
            Success
        })
    }
    public static sendResultByPage<T>(result: IResult<T>, res: Response, Success: boolean) {
        res.send({
            error: result.error,
            Data: result.data,
            count: result.count,
            Success
        })
    }
}