import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { ClassType } from "class-transformer/ClassTransformer";

export abstract class BaseModel {
    public async validateThis(IsSkip = false) {
        const Error = await validate(this, {
            skipUndefinedProperties: IsSkip
        });
        const temp = Error.map(it => Object.values(it.constraints));
        const result: string[] = [];
        temp.forEach(it => {
            result.push(...it)
        })
        return result
    }
    protected static basetransform<T>(cls: ClassType<T>, plainObject: object): T {
        if (plainObject instanceof cls) {
            return plainObject
        }
        return plainToClass(cls, plainObject)
    }
}