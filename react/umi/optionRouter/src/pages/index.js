import { Link } from 'umi'
function index() {
    return (
        <div>
            首页
            <Link to="/login">登录</Link>
        </div>
    )
}
index.wrappers = ['../routes/HandleTitle.js'];
export default  index
