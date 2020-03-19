import {NavLink} from 'umi';
import './index.css';
export default function index(props){
    return(
        <div>
            <NavLink  to='/'>首页</NavLink>
            <NavLink  to='/login'>登录</NavLink>
            <NavLink  to='/welcome'>欢迎</NavLink>
            <div>
                {props.children}
            </div>
        </div>
    )
}