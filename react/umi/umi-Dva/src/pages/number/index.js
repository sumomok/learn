import React from 'react';
import { connect } from 'umi'
function number(props) {
    return (
        <div>
            <p>
                {props.number}
            </p>
            <button onClick={() => {
                props.onAsyncIncrease()
            }}>异步+</button>
            <button onClick={() => {
                props.onAsyncDecrease()
            }}>异步-</button>
            <button onClick={() => {
                props.onIncrease()
            }}>+</button>
            <button onClick={() => {
                props.onDecresas()
            }}>-</button>
        </div>
    )
}
function mapStateToprops(state) {
    return {
        number: state.number
    }
}
function mapDispatchToprops(dispatch) {
    return {
        onAsyncIncrease: () => {
            dispatch({
                type: "number/asyncIncrease"
            })
        },
        onAsyncDecrease: () => {
            dispatch({
                type: "number/asyncDncrease"
            })
        },
        onIncrease: () => {
            dispatch({
                type: "number/increase"
            })
        },
        onDecrease: () => {
            dispatch({
                type: "number/decrease"
            })
        }
    }
}
let newnumber = connect(mapStateToprops,mapDispatchToprops)(number)
newnumber.title = "计数器"
export default newnumber;