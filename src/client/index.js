import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import './style.css';
import RootContainer from './containers';
import { soundPlayersReducer, mainPlayerReducer } from './reducers';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: blue
  }
});

const logger = createLogger();

const rootReducers = combineReducers({
  soundPlayersReducer,
  mainPlayerReducer
});

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <RootContainer />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
