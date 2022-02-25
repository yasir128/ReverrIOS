import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import articleReducer from './reducers';

const rootReducer = combineReducers({ articleReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));