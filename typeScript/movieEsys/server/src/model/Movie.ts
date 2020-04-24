import { IsNotEmpty, MinLength, ArrayMinSize, IsInt, Min, Max, IsArray, validate, IsString } from 'class-validator'
import { Type, plainToClass } from 'class-transformer';
import { BaseModel } from './baseModel';
export class Movie extends BaseModel {
    @IsNotEmpty({ message: "电影不能为空" })
    @Type(() => String)
    public name: string;

    @IsNotEmpty({
        message: "电影类型不能为空"
    })
    @IsArray({ message: "电影类型必须是一个数组" })
    @ArrayMinSize(1, { message: "电影类型至少一个" })
    @Type(() => String)
    public type: string[];

    @IsNotEmpty({ message: "上映地区不能为空" })
    @IsArray({ message: "上映地区必须是一个数组" })
    @ArrayMinSize(1, { message: "上映地区不能少于一个" })
    @Type(() => String)
    public areas: string[];

    @IsNotEmpty({ message: "时长不能为空" })
    @IsInt({ message: "时长必须为整数" })
    @Min(1, { message: "时长最小1分钟" })
    @Max(9999, { message: "电影时长不能大于9999分钟" })
    @Type(() => Number)
    public timeLong: number;

    @Type(() => String)
    public description?: string;

    @Type(() => String)
    public poster?: string;

    @IsNotEmpty({ message: "是否热映不能为空" })
    @Type(() => Boolean)
    public isHot: boolean = false;

    @IsNotEmpty({ message: "是否经典影片不能为空" })
    @Type(() => Boolean)
    public isClasic: boolean = false;

    static transform(plainObject: object): Movie {
        return super.basetransform(Movie, plainObject)
    }
}