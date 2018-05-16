import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { watchAuth } from './sagas/index';
import authReducer from './reducers/auth';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
});

const configureStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default () => configureStore;

sagaMiddleware.run(watchAuth);
