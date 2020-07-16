import { Response } from "express";

export class HandleRequest {
    public static sendResult(Data: any, error: string | null, res: Response, Success: boolean) {
        res.send({
            error,
            Data,
            Success
        })
    }
}