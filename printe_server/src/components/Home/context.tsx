import React, { PureComponent } from 'react'
import LoginModel from './loginModel'
import Options from '../../options'
export default class content extends PureComponent {
    render() {
        let loginModel = Options.loginMode.map((it, index) => {
            if (it.isActivation) {
                return <LoginModel path={it.PageUrl + '/login'} key={index}>{it.context}</LoginModel>
            }
            return undefined
        })     
        return (
            <div className="context">
                    {loginModel}
            </div>
        )
    }
}
