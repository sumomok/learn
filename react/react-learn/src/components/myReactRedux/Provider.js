import React from 'react';
import ctx from './ctx';
import PropTypes from 'prop-types';

export default function Provider(props) {
    
    return <ctx.Provider value={props.store }>
        {props.children}
    </ctx.Provider>
}
