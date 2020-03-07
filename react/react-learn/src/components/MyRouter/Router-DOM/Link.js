import React from 'react';
import ctx from '../Router/ctx';
export default function Link(props) {
    return (
        <ctx.Consumer>
            {
                values => {
                    const { location } = values
                    let href = props.to;
                    if (typeof props.to === 'object') {
                        href = location.createHref(props.to)
                    }

                    return (
                        <a href={href}>{props.children}</a>
                    )
                }
            }

        </ctx.Consumer>
    )
}
