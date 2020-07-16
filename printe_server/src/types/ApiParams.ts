interface Details {
    SubMouldeNo: string,
    StateCode: string,
    StateDescription: string
}
export interface UserLoginParams {
    LoginType: number,
    IDCardInfo?: string,
    UserNameInfo?: {
        UserName: string,
        UserPwd: string
    },
    CampusInfo?: string
}
export interface TerminalInfoParams {
    TerminalStateNo: string,
    TerminalStateDescription: string,
    TerminalLevel: string,
    submoduleDetails: Details[]
}

export interface TemplateInfoParams {
    M_Guid: string,
    UserGuid: string
}
export interface TemplateElecParams {
    M_Guid: string,
    UserGuid: string
}
export interface SwitchInfoParams {
    MachineInfo: {
        DiskInfo: string,
        CPUInfo: string,
        StorageInfo: string,
        MainBoardInfo: string,
        GraphicsInfo: string
    },
    SoftVersion: string,
    SoftVersionOfInner: number,
    SPVersion: string,
    SPVersionOfInner: number,
    MonitorVersion: string,
    MonitorVersionOfinner: number
}

export interface PrintInfoParams {
    UserCode?: string,
    UserIDCard?: string,
    UserType?: string,
    PrintResult: boolean,
    PrintCount: number,
    PrintNumber: string,
    Description: string,
    IsCharge: boolean,
    PayOrderNo: string,
    OrderTotalPrice: number,
    TempalatePDFpath: string,
    LocalePhoto: string,
    TemplateGuid: string,
    TemplateCode: string
}

export interface PackageInfoParams {
    PackageType: number,
    PackageCode: string
}

export interface DeviceCommandParams {
    OrderInfo: string,
    DirectiveNum: string,
    OrderInfoRes: string
}
export interface ApplyTempletParams {
    userCode: string,
    templateID: string,
    menumodelurl: string
}