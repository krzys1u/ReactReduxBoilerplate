// @flow

import type { Action, Dispatch, ThunkAction, GetState} from './index';

export const FILTER_APPLICATIONS: string = 'FILTER_APPLICATIONS';

export function filterApplications(pattern: string): Action {
    return {
        type: FILTER_APPLICATIONS,
        payload: {
            value: pattern
        }
    };
}