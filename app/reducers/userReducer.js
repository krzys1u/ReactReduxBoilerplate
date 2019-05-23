// @flow

import {
    USER_SET_NETWORK,
    USER_LOADING_START,
    USER_LOADED,
    OBJECT_TYPES_LOADED,
    FILTER_APPLICATIONS
} from '../actions';
import type { Action } from '../actions';

import { User, Application } from '../models';


type State = {
    +user: ?User,
    +applications: Array<Application>,
    +matchingApplications: Array<Application>,
    +network: string,
};

const initialState: State = {
    user: null,
    applications: [],
    matchingApplications: [],
    network: localStorage.getItem('network') || '1',
    objectStatusTypes: {},
};


export const userReducer = (state: State = initialState, action: Action): State => {
    let value = (action.payload || {}).value;

    switch(action.type) {
        case FILTER_APPLICATIONS: {
            const searchQuery = value.toLowerCase();
            return {
                ...state,
                matchingApplications: state.applications.filter(app => {
                    return !searchQuery.length || app.getName().toLowerCase().indexOf(searchQuery) !== -1;
                })
            };
        }
        case USER_SET_NETWORK: {
            localStorage.setItem('network', value);
            document.cookie = `network=NT-${value}; path=/`;

            const user: User = state.user;

            return {
                ...state,
                network: value,
                searchQuery: '',
                applications: user.getApplications(value),
                matchingApplications: user.getApplications(value)
            };
        }
        case USER_LOADING_START: {
            localStorage.setItem('network', state.network);
            document.cookie = `network=NT-${state.network}; path=/`;

            return state;
        }
        case USER_LOADED: {
            value = {...value};

            const user: User = new User(value.user_products, value.info);

            return {
                ...state,
                user: user,
                applications: user.getApplications(state.network),
                matchingApplications: user.getApplications(state.network),
            };
        }
        default: {
            return state;
        }
    }
};