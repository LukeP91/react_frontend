import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'
import App from './App'

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

render(AppWithStore, document.getElementById('root'));
