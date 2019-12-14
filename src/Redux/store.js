import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootreducer.js';
import {persistStore} from 'redux-persist';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);