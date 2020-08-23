import React, { PureComponent } from 'react'
import * as H from 'history';
import { MenuResult } from '../../types/response';
import { Link } from 'react-router-dom';
interface Iprops {
    history: H.History<H.LocationState>
    loaction: H.Location<H.LocationState>
    MenuInfo?: MenuResult[]
    setStep: (value: number) => void
    userInfo: {
        userCode?: string
        userName?: string
    }
}
export default class SelectTemplateType extends PureComponent<Iprops> {
    componentDidMount() {
        this.props.setStep(1);
    }
    render() {
        var newMenuInfoLeft: any[] = []
        var newMenuInfoRight: any[] = []
        let MenuInfoString = window.localStorage.getItem('MenuInfo') ? window.localStorage.getItem('MenuInfo') : "";
        let UserInfoString = window.localStorage.getItem('UserInfo') ? window.localStorage.getItem('UserInfo') : "";

        let MenuInfo = JSON.parse(MenuInfoString ? MenuInfoString : "");
        let UserInfo = JSON.parse(UserInfoString ? UserInfoString : "");
        console.log(UserInfo)
        if (MenuInfo) {
            //@ts-ignore
            MenuInfo.map((it, index) => {
                if (index % 2) {
                    newMenuInfoRight.push(
                        <Link key={it.m_guid} to={{
                            pathname: "/printer/UserInfo/selectTemplate/printcert",
                            state: it.secMenu
                        }} >
                            <img key={'printcert' + index} src={it.m_menuimg} alt="" />
                        </Link>
                    )
                } else {
                    newMenuInfoLeft.push(
                        <Link key={it.m_guid} to={{
                            pathname: "/printer/UserInfo/selectTemplate/printcert",
                            state: it.secMenu
                        }}>
                            <img key={'printcert' + index} src={it.m_menuimg} alt="" />
                        </Link>
                    )
                }
                return '';
            })
        }
        return (
            <div>
                <div className="userInfo">
                    <div className="content">
                        <p>
                            姓&nbsp;&nbsp;&nbsp;名：&nbsp;<span>{UserInfo.UserName}</span>
                        </p>
                        <p>
                            证件号：<span>{UserInfo.UserCode}</span>
                        </p>
                    </div>
                </div>
                <div className="SelectTemplateTypes">
                    <div className="left">
                        {newMenuInfoLeft}
                    </div>
                    <div className="right">
                        {newMenuInfoRight}
                    </div>
                </div>
            </div>
        )
    }
}
