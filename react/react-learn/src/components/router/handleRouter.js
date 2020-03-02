import React from 'react';
import { Route, Switch } from 'react-router-dom';
export default function handleRoute(routerArr, basePath) {
    if (!Array.isArray(routerArr)) {
        return null
    }
    let res = routerArr.map((it, i) => {
        const { component: Component, path, children, ...rest } = it
        let newPath = (basePath + path);
        newPath = newPath.replace(/\/\//g, '/');
        return (
            <Route path={newPath} key={i} render={values => {
                return <Component {...values}>
                    {handleRoute(it.children, path)}
                </Component>
            }} {...rest}>
            </Route>
        )
    });
    console.log(res);
    return (
        <Switch>
            {res}
        </Switch>
    )
}