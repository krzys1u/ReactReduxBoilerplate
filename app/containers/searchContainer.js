import React, { Component } from 'react';

import { connect} from 'react-redux';

import { Search } from '../components';

import { filterApplications } from '../actions';

@connect(mapStateToProps, mapDispatchToProps)
export class SearchContainer extends Component<{}, State> {
    render() {
        const {
            searchQuery,
            network,

            doFilter,
        } = this.props;

        return (
            <div className='search_box'>
                <Search
                    searchQuery={searchQuery}
                    network={network}
                    filterApps={doFilter}
                />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        searchQuery: state.searchReducer.searchQuery,

        matchingApplications: state.userReducer.matchingApplications || [],
        network: state.userReducer.network,
    };
}

function mapDispatchToProps(dispatch){
    return {
        doFilter: (query) => dispatch(filterApplications(query)),
    };
}