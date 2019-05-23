import React, { Component } from 'react';
import { connect} from 'react-redux';

import { Spinner, Errors } from '../components';


@connect(mapStateToProps, mapDispatchToProps)
export class OutOfAppContainer extends Component {
    render() {
        return ([
            <Errors errors={this.props.errors} key={'errors_container'}/>,
            <Spinner active={this.props.loader} key={'spinner_container'}/>
        ]);
    }
}


function mapStateToProps(state){
    return {
        loader: state.spinnerReducer.loader,
        errors: state.errorReducer.errors,
        ...state
    };
}

function mapDispatchToProps(dispatch){
    return {};
}