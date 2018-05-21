import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { watchAuth, watchExpenses } from './sagas/index';
import authReducer from './reducers/auth';
import uiReducer from './reducers/ui';
import expensesReducer from './reducers/expenses';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  expenses: expensesReducer,
});

let composeEnhancers = compose;

if (__DEV__) {
  // eslint-disable-next-line
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

export default () => configureStore;

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchExpenses);
