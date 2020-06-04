import React, { PureComponent } from 'react'
import printcerity from '../../assets/img/printcerity.png';
import printcert from '../../assets/img/printcert.png';
import * as H from 'history';
interface Iprops {
    history: H.History<H.LocationState>
    location: H.Location<H.LocationState>;
}
export default class SelectTemplateType extends PureComponent<Iprops> {
    render() {
        return (
            <div>
                <div className="userInfo">
                    <div className="content">
                        <p>
                            姓&nbsp;&nbsp;&nbsp;名：<span>测试1</span>
                        </p>
                        <p>
                            证件号：<span>201620387</span>
                        </p>
                    </div>
                </div>
                <div className="SelectTemplateTypes">
                    <div className="left">
                        <img src={printcerity} onClick={() => {
                            this.props.history.push('/printer/UserInfo/selectTemplate/printcerity')
                        }} alt="" />
                    </div>
                    <div className="right">
                        <img src={printcert} alt="" onClick={() => {
                            this.props.history.push('/printer/UserInfo/selectTemplate/printcert')
                        }} />
                    </div>
                </div>
            </div>
        )
    }
}
