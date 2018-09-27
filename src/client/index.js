import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import './style.css';
import RootContainer from './containers';
import { soundPlayersReducer, mainPlayerReducer } from './reducers';

const logger = createLogger();

const rootReducers = combineReducers({
  soundPlayersReducer,
  mainPlayerReducer
});

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.getElementById('root')
);
