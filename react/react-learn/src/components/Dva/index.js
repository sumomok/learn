import React from 'react'
import {connect} from 'dva'
function index(props) {
    return (
        <div>
            <p>
                {props.number}
            </p>
            <button onClick={()=>{
                props.onAsyncIncrease()
            }}>异步+</button>
            <button onClick={()=>{
                props.onAsyncDecrease()
            }}>异步-</button>
            <button onClick={()=>{
                props.onIncrease()
            }}>+</button>
            <button onClick={()=>{
                props.onDecresas()
            }}>-</button>
        </div>
    )
}

function mapStateToprops(state){
    return {
        number:state.number
    }
}
function mapDispatchToprops(dispatch){
    return {
        onAsyncIncrease:()=>{
            dispatch({
                type:"number/asyncIncrease"
            })
        },
        onAsyncDncrease:()=>{
            dispatch({
                type:"number/asyncDncrease"
            })
        },
        onIncrease:()=>{
            dispatch({
                type:"number/increase"
            })
        },
        onDecrease:()=>{
            dispatch({
                type:"number/decrease"
            })
        }
    }
}
export default connect(mapStateToprops,mapDispatchToprops)(index)