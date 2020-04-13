import { BaseModel } from "./baseModel";
import { IsNumber, IsInt, Min } from "class-validator";
import { Type } from "class-transformer";

export class SearchCondition extends BaseModel {
    @IsInt({ message: "页码必须是整数" })
    @Min(1, { message: "页码必须大于1" })
    @Type(() => Number)
    public page: number = 1;
    @IsInt({ message: "页容量必须是整数" })
    @Min(1, { message: "页容量必须大于1" })
    @Type(() => Number)
    public limit: number = 10;
    @Type(() => String)
    public key: string = "";
    public static transform(plainObj: object): SearchCondition {
        return super.basetransform(SearchCondition, plainObj);
    }
}