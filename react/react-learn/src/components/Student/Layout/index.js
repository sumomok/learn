import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './index.css'
export default class Layout extends PureComponent {
    static propTypes = {
        header: PropTypes.element,
        menuList: PropTypes.element
    }
    render() {
        return (
            <div className='wrapper'>
                <header>
                    {this.props.header}
                </header>
                <div className='container'>
                    <div className="left">
                        {this.props.menuList}
                    </div>
                    <div className="right">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
