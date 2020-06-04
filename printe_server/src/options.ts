import { options } from "./types/options"
import backHome from './assets/img/background-bg.jpg';
import backcontent from './assets/img/background_default.png';
import btn_cancel from './assets/img/btn_cancel.png';
import btn_continue from './assets/img/btn_continue.png';
import exit from './assets/img/exit.png';
import home from './assets/img/home.png';
import IDCardimg from './assets/img/IDCard.png';
import login_error from './assets/img/login-error.png';
import login from './assets/img/login.png';
import logo from './assets/img/logo.png';
import offline from './assets/img/offline.png';
import ok from './assets/img/ok.png';
import print_error from './assets/img/print-error.png';
import print from './assets/img/print.png';
import back from './assets/img/back.png';
import close from './assets/img/close.png';
import readcard_part from './assets/img/readcard_part.png';
import readidcard_part from './assets/img/readidcard_part.png';
import school_card from './assets/img/school_card.png';
import wechat from './assets/img/sdwechat.png';
import success from './assets/img/success.png';
import telephone from './assets/img/telephone.png';
import FaceVerifyComp from './page/FaceVerify';
import IDCardComp from './page/IDCard';
import UserInfoComp from './page/UserInfo';
import SSCardComp from './page/SSCard';
const Options: options = {
    device: [
        {
            deviceClassId: "CLSID:B2A0F7A0-A7BC-453C-8550-44964AAE930E",
            id: "SCCard",
        },
        {
            deviceClassId: "CLSID:2621A234-B751-4DBB-A3D5-729831487BD8",
            id: "IDCard",
        },
    ],
    img: {
        homeBackgroundUrl: backHome,
        backgroundUrl: backcontent,
        weChat:wechat,
        logo: logo,
        DevOpsTel: telephone,
        button: {
            home: home,
            back: back,
            ok: ok,
            print: print,
            close: close,
            cancel: btn_cancel,
            continue: btn_continue,
            exit: exit,
            loginError: login_error,
            offline: offline,
            printError:  print_error,
            readSSCardPart: readcard_part,
            readIDCardPart:  readidcard_part,
            printSuccess:success
        },
        loginbtn: login,
        IDCard: IDCardimg,
        SSCard: school_card,

    },
    loginMode: [
        {
            Model: "FaceVerify",
            context:"我要人脸识别",
            isActivation: false,
            PageUrl: "/printer/FaceVerify",
            comp:FaceVerifyComp
        },
        {
            Model: "IDCard",
            isActivation: true,
            PageUrl: "/printer/IDCard",
            comp: IDCardComp,
            context:"我要用身份证"
        },
        {
            Model:"SSCard",
            isActivation: false,
            PageUrl: "/printer/SSCard",
            comp: SSCardComp,
            context:"我要用校园卡"
        },
        {
            Model:"UserInfo",
            isActivation: true,
            PageUrl: "/printer/UserInfo",
            comp: UserInfoComp,
            context:"我要统一认证"
        }
    ]

}
export default Options

