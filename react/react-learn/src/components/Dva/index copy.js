/*
 * @Author: your name
 * @Date: 2020-03-16 09:19:38
 * @LastEditTime: 2020-03-16 16:28:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\Dva\index.js
 */
import React from 'react';
import { connect } from 'dva';
import { routerRedux, NavLink, Route, Switch } from 'dva/router'
let newNumber = connect(mapStateToprops, mapDispatchToprops)(number)
function index(props) {
    return (
        <div>
            <routerRedux.ConnectedRouter history={props.history}>
                <div>
                    <NavLink to='/'>首页</NavLink>
                    <NavLink to='/number'>计数器</NavLink>
                    <Switch>
                        <Route path="/number" component={newNumber}></Route>
                        <Route path='/' render={
                            () => {
                                return (
                                    <h1>首页</h1>
                                )
                            }
                        }></Route>
                    </Switch>
                </div>
            </routerRedux.ConnectedRouter>
        </div>

    )
}
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
        onAsyncDncrease: () => {
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
export default index;