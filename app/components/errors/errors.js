// @flow
import React, { Component } from 'react';

import Error from './error';

import { Error as ErrorModel } from '../../models';

type Props = {
    errors?: Array<ErrorModel>
}

export class Errors extends Component<Props> {
    printErrors(): Array<React$Element<any>> | null {
        const { errors } = this.props;

        if (!errors) {
            return [];
        }

        let errorList:Array<React$Element<any>> = [];

        for (let error of errors){
            errorList.push(<Error error={error} key={`error_${errors.indexOf(error)}`}/>);
        }

        return errorList;
    }
    render() {
        return (
            <div className="errors_container">
                {this.printErrors()}
            </div>
        );
    }
}

