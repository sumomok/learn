import 'reflect-metadata';
import {IsNotEmpty} from 'class-validator'

class RegUser{
    @IsNotEmpty()
    loginId:string = ""
    loginpsw:string = ""
}