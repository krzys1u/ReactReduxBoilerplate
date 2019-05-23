import React, { Component } from 'react';

import { connect} from 'react-redux';

import { Tenants } from '../components';

import { getUserData, changeNetwork } from '../actions';

@connect(mapStateToProps, mapDispatchToProps)
export class TenantsContainer extends Component {
    componentDidMount() {
        const { loadUserData } = this.props;
        loadUserData();
    }

    render() {
        return (
            <Tenants
                user={this.props.user}
                network={this.props.network}
                chooseCallback={this.props.changeNetwork}
            />
        )
    }
}


function mapStateToProps(state){
    return {
        user: state.userReducer.user,
        network: state.userReducer.network,
        ...state
    };
}

function mapDispatchToProps(dispatch){
    return {
        loadUserData: () => dispatch(getUserData()),
        changeNetwork: (nt) => dispatch(changeNetwork(nt)),
    };
}