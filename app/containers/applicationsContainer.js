import React, { Component } from 'react';

import { connect} from 'react-redux';

import { Applications } from '../components';

@connect(mapStateToProps, mapDispatchToProps)
export class ApplicationsContainer extends Component {
    render() {
        return (
            <Applications applications={this.props.matchingApplications}/>
        )
    }
}

function mapStateToProps(state){
    return {
        matchingApplications: state.userReducer.matchingApplications || [],
        applications: state.userReducer.applications || [],
        ...state
    };
}

function mapDispatchToProps(dispatch){
    return {};
}