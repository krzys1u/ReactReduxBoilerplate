// @flow

export type Action = {
    type: string,
    payload?: Object
}

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;

export * from './userActions';
export * from './spinnerActions';
export * from './errorActions';
export * from './searchActions';