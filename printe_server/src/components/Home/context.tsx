import React, { PureComponent } from 'react'
import LoginModel from './loginModel'
import Options from '../../options'
/**
 * 中间组件，主要为根据options.ts的登录模式来生成不同的登录组件
 */
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
