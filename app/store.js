// @flow

import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { userReducer, spinnerReducer, errorReducer, searchReducer } from './reducers';

import thunk from 'redux-thunk'

const reducers = combineReducers({
    userReducer,
    spinnerReducer,
    errorReducer,
    searchReducer
});

let store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        !window.catalogMode && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    )
);

export default store;
