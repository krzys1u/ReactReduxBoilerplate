// @flow

import {
    FILTER_APPLICATIONS,
} from '../actions';

import type { Action } from '../actions';

type State = {
    +searchQuery: string,
};

const initialState: State = {
    searchQuery: '',
};

export const searchReducer = (state: State = initialState, action: Action): State => {
    let value = (action.payload || {}).value;

    switch(action.type) {
        case FILTER_APPLICATIONS: {
            return {
                ...state,
                searchQuery: value
            };
        }

        default: {
            return state;
        }
    }
};