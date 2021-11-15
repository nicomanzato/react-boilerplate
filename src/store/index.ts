import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history'
import appSagas from './appSagas';
import createRootReducer from './appReducer';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  createRootReducer(),
  composeEnhancer(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(appSagas);

export default store;

