import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Routes } from './Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunkMiddleware from 'redux-thunk';
import './i18n';

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
