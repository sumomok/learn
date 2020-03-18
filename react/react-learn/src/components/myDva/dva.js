import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSaga from 'redux-saga';
import * as sagaEffects from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createHashHistory } from 'history';
import { connectRouter } from 'connected-react-router';
export default function (opts = {}) {
    let defaultOptions = {
        history: opts.history || createHashHistory(),
        initialState: null,
        onError: null,
        extraReducers: null,
        onEffect: null,
        onReducer: null,
        onStateChange: null,
        onAction: null
    }
    opts = defaultOptions;
    var app = {
        model,
        router,
        start,
        _models: [],
        _router: null,

    }

    function extraState() {
        /*eslint-disable */
        return {
            router: connectRouter(opts.history),
            ['@@DVA'](state = null, action) {
                return state
            }
        }
    }
    /**
     * 根据模型对象来生成
     * @param {*} option 
     */
    function model(option) {
        app._models.push(option);
    }
    /**
     * 用于记录路由函数
     * @param {*} routerFunc 
     */
    function router(routerFunc) {
        app._router = routerFunc;
    }
    /**
     * 返回一个初步处理的的reducer对象
     * @param {*} type 
     * @param {*} func 
     */
    function handleModel(type, func) {
        return {
            type,
            func
        }
    }
    /**
     * 得到一个rootReducer
     * @param {*} model 
     */
    function getreducer(model) {
        let actionTypes = [];
        for (const key in model.reducers) {
            if (model.reducers.hasOwnProperty(key)) {
                actionTypes.push(handleModel(`${model.namespace}/${key}`, model.reducers[key]))
            }
        }
        actionTypes.push()
        let reducer = {
            name: model.namespace,
            reducer: function (state = model.state, action) {
                let { type } = action;
                for (const it of actionTypes) {
                    if (it.type === type) {
                        return it.func(state, action)
                    }
                }
                return state;
            }
        }
        return reducer
    }
    /**
     * 得到一个总的中间件
     * @param  {...any} Middleware 
     */
    function getMiddleware(...Middleware) {
        return composeWithDevTools(applyMiddleware(...Middleware))
    }
    /**
     * 传入一个中间件，得到一个仓库对象
     * @param {*} Middleware 
     */
    function getStore(...Middleware) {
        let saga = createSaga();
        let reducers = {};
        if (app._models) {
            for (const props in app._models) {
                let reducerObj = getreducer(app._models[props]);
                if (reducerObj) {
                    reducers[reducerObj.name] = reducerObj.reducer
                }
            }
        }
        let store = createStore(combineReducers({ ...extraState(), ...reducers }), getMiddleware(saga, ...Middleware))
        saga.run(getSaga())
        return store
    }
    function getSaga() {
        let taskArr = [];
        for (const model of app._models) {
            for (const item in model.effects) {
                taskArr.push({
                    type: `${model.namespace}/${item}`,
                    generatorFunc: model.effects[item],
                    put: function* (action) {
                        yield sagaEffects.put({ ...action, type: `${model.namespace}/${action.type}` })
                    }
                })
            }
        }
        return function* () {
            for (const item of taskArr) {
                yield sagaEffects.takeEvery(item.type, function* (action) {
                    // 重写put方法使其在调用过程中自动将namespace传入
                    yield* item.generatorFunc(action, { ...sagaEffects, put: item.put })
                })
            }
        }
    }

    function start(selectTol) {
        let store = getStore();
        window.store = store;
        ReactDOM.render(render(app._router, store), document.querySelector(selectTol));
    }
    function render(Comps, store) {
        let Comp = Comps(opts.history)
        return (

            <Provider store={store}>
                {Comp}
            </Provider>
        )
    }
    return app
}