import React from 'react'
import ctx from './ctx';
export default function withRouter(Comp) {
    function routerWrapper(props) {
        return (
            <ctx.Consumer>
                {
                    valus => {
                        return (
                            <Comp {...props} {...valus} />
                        )
                    }
                }

            </ctx.Consumer>
        )
    }
    routerWrapper.displayName = `withRouter(${Comp.displayName})`;
    return routerWrapper

}

