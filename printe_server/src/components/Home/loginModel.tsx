import React, { PureComponent } from 'react'
import Options from '../../options';
import '../../assets/sass/loginModel.scss';
import line from '../../assets/img/line.png';
import {  Link } from 'react-router-dom';
interface Iprops{
    path:string
}
/**
 * 登录模块组件，根据option.ts的属性来生成不同的组件
 */
export default class loginModel extends PureComponent<Iprops> {
    render() {
        return (
            <div className="loginModel">
                <div className="content">
                    <span>{this.props.children}</span>
                    <Link to={this.props.path}><img src={Options.img.loginbtn} alt="" /></Link>
                </div>
                <div className="line">
                    <img src={line} alt=""/>
                </div>
            </div>
        )
    }

}
