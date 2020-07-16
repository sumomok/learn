import React, { PureComponent } from 'react';
import '../../assets/sass/UserInfoContent.scss';
import Keyboard from '../keyboard/keyboard';
interface IProps {
    onChengeUserName: Function
    onChengePassword: Function
    userName: string
    password: string
    onDeleteUserName: Function
    onDeletePassword: Function
    inputDomClass: string
    onChangeinputDomClass: Function
    setStep: (value: number) => void
}
export default class Login extends PureComponent<IProps>{
    componentDidMount() {
        this.props.setStep(0);
    }
    onChange(value: string) {
        if (this.props.inputDomClass === 'texthosno_inputhosno') {
            this.props.onChengeUserName(value)
        } else if (this.props.inputDomClass === 'texthosno_password') {
            this.props.onChengePassword(value)
        }
    }
    onDelete() {
        if (this.props.inputDomClass === 'texthosno_inputhosno') {
            this.props.onDeleteUserName()
        } else if (this.props.inputDomClass === 'texthosno_password') {
            this.props.onDeletePassword()
        }
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
                        <input type="text" id="texthosno_inputhosno" className="texthosno_inputhosno" onClick={() => {
                            this.props.onChangeinputDomClass('texthosno_inputhosno')
                        }} value={this.props.userName} onChange={() => { }} />
                    </div>
                    <div className="password">
                        <label htmlFor="texthosno_password">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
                        <input type="password" id="texthosno_password" className="texthosno_password" onClick={() => {
                            this.props.onChangeinputDomClass('texthosno_password')
                        }} value={this.props.password} onChange={() => { }} />
                    </div>
                </div>
                <div>
                    <Keyboard
                        onChange={(value: string) => {
                            this.onChange(value);
                        }}
                        onEnter={() => {

                        }}
                        onDelete={() => { this.onDelete() }}
                    ></Keyboard>
                </div>
            </div>
        )
    }
}
