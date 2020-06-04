import React, { PureComponent } from 'react'
import Options from '../../options';
import '../../assets/sass/loginModel.scss';
import line from '../../assets/img/line.png';
import {  Link } from 'react-router-dom';
interface Iprops{
    path:string
}
export default class loginModel extends PureComponent<Iprops> {
    render() {
        console.log(this.props.path);
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
