/*
 * @Author: your name
 * @Date: 2020-03-16 09:19:38
 * @LastEditTime: 2020-03-17 17:31:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\Dva\index.js
 */
import React from 'react';
// import { connect } from 'react-redux';
import { connect } from '../myDva'
import { routerRedux, NavLink, Route, Switch } from '../myDva/router'
let newNumber = connect(mapStateToprops, mapDispatchToprops)(number);
// let newNumber = connect(null, mapDispatchToprops)(number);
function index(props) {
    // let Comp = newNumber
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
                props.onAsyncDncrease()
            }}>异步-</button>
            <button onClick={() => {
                props.onIncrease()
            }}>+</button>
            <button onClick={() => {
                props.onDecrease()
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
                type: "number/asyncDecrease"
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