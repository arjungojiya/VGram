import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import MainReducers from '../VGReducers';

const middleware = applyMiddleware(thunk);
export const store = createStore(MainReducers, middleware);
