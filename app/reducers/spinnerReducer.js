// @flow

import { SPINNER_SHOW, SPINNER_HIDE } from '../actions';
import type { Action } from '../actions';

type State = {
    +loader: boolean,
};

const initialState: State = {
    loader: true
};

export const spinnerReducer = (state: State = initialState, action: Action): State => {
    switch(action.type) {
        case SPINNER_SHOW: {
            return { ...state,
                loader: true
            };
        }
        case SPINNER_HIDE: {
            return {
                ...state,
                loader: false
            };
        }
        default: {
            return state;
        }
    }
};
