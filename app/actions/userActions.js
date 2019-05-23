// @flow

import { showSpinner, hideSpinner, showError, filterApplications } from './index';

import { query } from '../utils';
import { Error as ErrorModel } from '../models';

import type { Action, Dispatch, ThunkAction} from './index';

export const USER_SET_NETWORK: string = 'USER_CHANGE_NETWORK';
export const USER_LOADING_START: string = 'USER_LOADING_START';
export const USER_LOADED: string = 'USER_LOADED';
export const OBJECT_TYPES_LOADED: string = 'OBJECT_TYPES_LOADED';

export function userLoadingStart(): Action {
    return {
        type: USER_LOADING_START
    };
}

export function userDataLoaded(value: Object): Action {
    return {
        type: USER_LOADED,
        payload: {
            value: value
        }
    };
}

export function changeNetwork(network: string): ThunkAction {
    return (dispatch: Dispatch) => {
        dispatch(filterApplications(''));
        dispatch(setNetwork(network));
    };
}

export function setNetwork(network: string): Action {
    return {
        type: USER_SET_NETWORK,
        payload: {
            value: network
        }
    };
}

export function getUserData(): ThunkAction {
    return (dispatch: Dispatch) => {
        dispatch(showSpinner());
        dispatch(userLoadingStart());

        const userGet: Promise<any> = query('getUserQuery');

        userGet.then((userResult: Object) => {
            const user: Object = userResult.data.user_manager.me;

            dispatch(userDataLoaded(user));
            dispatch(hideSpinner());
        }).catch(error => {
            dispatch(hideSpinner());

            let err: ErrorModel;

            if (!(error instanceof ErrorModel)){
                err = new ErrorModel(error.message, 'Application error');
            }
            else {
                err = error;
            }

            dispatch(showError(err));
        });
    };
}