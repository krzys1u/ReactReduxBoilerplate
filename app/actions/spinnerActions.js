// @flow

import type { Action } from './index';

export const SPINNER_SHOW: string = 'SPINNER_SHOW';
export const SPINNER_HIDE: string = 'SPINNER_HIDE';

export function showSpinner(): Action {
    return {
        type: SPINNER_SHOW
    }
}

export function hideSpinner(): Action {
    return {
        type: SPINNER_HIDE
    }
}