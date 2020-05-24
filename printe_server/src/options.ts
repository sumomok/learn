import { options } from "./types/options"
import IDCard from './device/IDCard';
import Print from './device/IDCard';
import SSCard from './device/IDCard';
const Options: options = {
    device: [
        {
            deviceClassId: "CLSID:B2A0F7A0-A7BC-453C-8550-44964AAE930E",
            id: "SCCard",
            deviceTS:SSCard
        },
        {
            deviceClassId: "CLSID:2621A234-B751-4DBB-A3D5-729831487BD8",
            id: "IDCard",
            deviceTS:IDCard
        },
        {
            deviceClassId: "CLSID:1B58C214-90C8-4273-89BF-0C65F38411B7",
            id: "ptrDocumentDevice",
            deviceTS:Print
        }
    ],
    img: {
        backgroundUrl: "",
        logo: ""
    },
    loginMode: {
        IDCard: {
            isActivation: true,
            PageUrl: "",
            PageComponentUrl: ""
        },
        SSCard: {
            isActivation: false,
            PageUrl: "",
            PageComponentUrl: ""
        },
        UserInfo: {
            isActivation: true,
            PageUrl: "",
            PageComponentUrl: ""
        },
        FaceVerify: {
            isActivation: false,
            PageUrl: "",
            PageComponentUrl: ""
        }
    }
}
export default Options

