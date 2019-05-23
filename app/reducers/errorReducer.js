// @flow

import { ADD_ERROR, REMOVE_ERROR } from '../actions';
import type { Action } from '../actions';

import { Error as ErrorModel } from '../models';

type State = {
    +errors: Array<ErrorModel>,
};

const initialState: State = {
    errors: []
};

export const errorReducer = (state: State = initialState, action: Action): State => {
    switch(action.type) {
        case ADD_ERROR: {
            let error: ErrorModel = (action.payload || {}).value;

            if (error) {
                console.error(error);
                state.errors.push(error);
            }

            return {
                ...state,
                errors: state.errors
            }
        }
        case REMOVE_ERROR: {
            state.errors.shift();

            return {
                ...state,
                errors: state.errors
            }
        }
        default: {
            return state;
        }
    }
};
