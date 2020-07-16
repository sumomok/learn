export interface MenuResult{
    m_guid: string
    m_menuimg: string
    m_name: string
    secMenu:secMenu[]
}
export interface userInfo {
    MenuInfo?: MenuResult[]
    UserInfo?: {
        UserCode?: string
        UserName?: string
        UserType?: string
    }
}
export interface secMenu{
    m_guid: string
    m_iselectronic: string
    m_menucode: string
    m_menuimg: string
    m_menumodelurl: string
    m_name: string
    m_paperbox:string
}