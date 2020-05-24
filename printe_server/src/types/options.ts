import { devicObject } from "./devic";

export interface options {
    device: devicObject[]
    img: imgUrl
    loginMode:loginMode
}

interface imgUrl {
    backgroundUrl: string
    logo:string
}
interface loginMode{
    IDCard:loginType
    SSCard:loginType
    UserInfo:loginType
    FaceVerify:loginType
}
interface loginType {
    isActivation: boolean,
    PageUrl: string,
    PageComponentUrl:string
}