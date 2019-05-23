// @flow
import React, { Component } from 'react';

type PropsEmptyResult = {
    message: string
}

export class EmptyResult extends Component<PropsEmptyResult> {
    render() {
        return (
            <div className="empty_results">{this.props.message}</div>
        );
    }
}


