/* eslint-disable */
import {NavLink} from 'umi';
export default function index(props) {
    return (
        <div>
            首页导航
            <NavLink to="/">首页</NavLink> 
            <NavLink to="/page1">page1</NavLink> 
            <NavLink to="/page2">page2</NavLink> 
            <NavLink to="/sub">sub</NavLink> 
            <NavLink to="/sub/subpage">/sub/subpage</NavLink> 
            <button onClick={()=>{
                props.history.push('/sub/subpage')
            }}>跳转</button>
            {props.children}
            尾页
        </div>
    )
}
