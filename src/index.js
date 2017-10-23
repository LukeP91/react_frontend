import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './appRedux'
import thunk from 'redux-thunk'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(
    thunk
  )),
);

const AppWithStore = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(AppWithStore, document.getElementById('root'));
