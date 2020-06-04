import React, { PureComponent } from 'react'
import '../../assets/sass/UserInfoContent.scss'

export default class Login extends PureComponent {
    keyBoardChange = (input: string) => {
        console.log(input)
    }
    keyBoardKeyPress = (button: any) => {
        console.log(button);
    }
    render() {
        return (
            <div style={{ width: '85%', margin: '20px auto' }}>
                <div style={{ width: '100%', height: '270px', margin: "0 auto" }}>
                    <div className="title">
                        <span className="flow-tips">请使用山东大学统一认证的用户密码</span>
                    </div>
                    <div className="userName">
                        <label htmlFor="texthosno_inputhosno">工号/学号：</label>
                        <input type="text" ref={'texthosno_inputhosno'} id="texthosno_inputhosno" className="texthosno_inputhosno" />
                    </div>
                    <div className="password">
                        <label htmlFor="texthosno_password">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
                        <input type="text" id="texthosno_password" className="texthosno_password" />
                    </div>
                </div>
                <div>
                </div>
            </div>
        )
    }
}
