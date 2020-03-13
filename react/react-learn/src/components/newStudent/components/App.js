import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import Context from './studentlist';
import store from '../store'
export default class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <Context />
            </Provider>
        )
    }
}
