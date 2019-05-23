// @flow

import type { Action, Dispatch, ThunkAction } from './index';

export const ADD_ERROR: string = 'ADD_ERROR';
export const REMOVE_ERROR: string = 'REMOVE_ERROR';

export function addError(error: Error): Action {
    return {
        type: ADD_ERROR,
        payload: {
            value: error
        }
    }
}

export function removeError(): Action {
    return {
        type: REMOVE_ERROR
    }
}

export function showError(error: Error): ThunkAction {
    return (dispatch: Dispatch) => {
        dispatch(addError(error));

        setTimeout(()=>dispatch(removeError()), 3000);
    }
}