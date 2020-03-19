import { NavLink } from 'umi'
export default function (props) {
    return (
        <div>
            <NavLink to="/">首页</NavLink>
            <NavLink to="/number">计数器</NavLink>
            <div>
                {props.children}
            </div>
        </div>
    )
}