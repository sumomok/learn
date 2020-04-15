import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';

interface IParams {
    id: string
}
export default class EditMovie extends PureComponent<RouteComponentProps<IParams>> {
    render() {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}
