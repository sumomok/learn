export default function welcome({history}) {
    let loginId = localStorage.getItem('loginID')
    return (
        <div>
            欢迎你 ：{loginId}
            <button onClick={
                ()=>{
                    history.push('/login')
                }
            }>注销</button>
        </div>
    )
}
