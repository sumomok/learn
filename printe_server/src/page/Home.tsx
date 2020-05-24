import React, { PureComponent } from 'react';
import Devic from '../components/devic/devic';
import Options from '../options';
export default class Home extends PureComponent {
    render() {
        return (
            <>
                <Devic device={Options.device}></Devic>
            </>
        )
    }
}
