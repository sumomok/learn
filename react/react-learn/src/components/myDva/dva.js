import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import createSaga from 'redux-saga'
export default function (option = {}){
    var app = {
        model,
        router,
        start,
        _models:[],
        _router:null,

    }
    /**
     * 根据模型对象来生成
     * @param {*} option 
     */
    function model(option){
        app._models.push(option);
    }
    /**
     * 用于记录路由函数
     * @param {*} routerFunc 
     */
    function router(routerFunc){
        app._router = routerFunc;
    }
    function handleModel(type,func){
        return{
            type,
            func
        }
    }
    function reducer(call){
        return function (state,{type,action}){
            
        }
    }
    function createReducer(){
        let actionsTypes = []
        if (app._models){
            for (const props in app._models) {
                if (app._models.hasOwnProperty(props)) {
                    actionsTypes.push(handleModel(props,app._models[props]))        
                }
            }

        }
        let reducer = {

        }
        return reducer
    }
    function start (selectTol) {
        let saga = createSaga()
        let store = createStore(combineReducers(createReducer()),applyMiddleware(saga))
        ReactDOM.render(render(app._router,store), document.querySelector(selectTol));
    }
    function render(comp,store){
        let temp = comp()
        return(
            <Provider store={store}>
                {temp}
            </Provider>
        )
    }
    return app
}