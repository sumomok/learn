import { devicObject } from "./devic";
import FaceVerifyComp from '../page/FaceVerify'
export interface options {
    device: devicObject[]
    img: imgUrl
    loginMode: loginType[]
}

interface imgUrl {
    backgroundUrl: string
    logo: string,
    homeBackgroundUrl: string,
    weChat: string
    DevOpsTel: string
    button: {
        home: string,
        back: string,
        ok: string,
        print: string,
        close: string,
        cancel: string,
        continue: string,
        exit: string,
        loginError: string,
        offline: string,
        printError: string,
        readSSCardPart: string,
        readIDCardPart: string,
        printSuccess:string
    },
    loginbtn: string,
    IDCard: string,
    SSCard:string
}
// export interface loginMode{
//     IDCard:loginType
//     SSCard:loginType
//     UserInfo:loginType
//     FaceVerify:loginType
// }
export interface loginType {
    Model:"IDCard"| "SSCard" | "UserInfo" |"FaceVerify"
    isActivation: boolean,
    PageUrl: string,
    comp: typeof FaceVerifyComp,
    context:string
}