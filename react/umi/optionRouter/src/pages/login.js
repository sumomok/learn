import {useRef} from 'react';
export default function login(props) {
    const username = useRef();
    const password = useRef()
    return (
        <div>
            <div>账号：<input type="text" ref={username}/></div>
            <div>密码：<input type="password" ref={password}/></div>
            <button onClick={
                ()=>{
                    if(password.current.value==='123'){
                        localStorage.setItem('loginID',username.current.value)
                        props.history.push('/welcome');
                    } else {

                    }
                }
            }>登录</button>
        </div>
    )
}
