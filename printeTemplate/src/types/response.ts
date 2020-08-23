export interface requestData {
    AppMsg: string,
    AppCode: number,
    Success: boolean,
    Data: requestDataDataparams
}
interface requestDataDataparams {
    printNumber: string;
    chargeObj: {
        ischarge: boolean,
        qrcodeInfo: string,
        totalprice: number
    },
    templageData: {
        data: string
    }
}