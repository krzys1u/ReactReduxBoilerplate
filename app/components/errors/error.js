// @flow
import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

import { Error as ErrorModel } from '../../models';

type Props = {
    error: ErrorModel
}

class Error extends Component<Props> {
    renderError():  Array<React$Element<any>>{
        let { error } = this.props;
        let code = error.getCode();

        let elements:Array<React$Element<any>> = [];

        elements.push(<Message.Header key='item_no_1'>{error.getTitle()}</Message.Header>);


        if(code) {
            elements.push(<p key='item_no_2'>Error code: <strong>{code}</strong></p>);
        }

        elements.push(<p key='item_no_3'>{error.getMessage()}</p>);

        return elements;
    }
    render() {
        return (
            <Message negative>
                {this.renderError()}
            </Message>
        );
    }
}

export default Error;

