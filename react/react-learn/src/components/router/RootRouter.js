import React from 'react'
import handleRouter from './handleRouter';
import Route from './RouterConfig';
export default function RootRouter(props) {
    return (
        <>
            {handleRouter(Route, '')}
        </>
    )
}
