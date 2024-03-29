import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Routes } from './Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { history, rootReducer } from './reducers';
import thunkMiddleware from 'redux-thunk';
import './i18n';
import Loading from './components/Loading';
import promise from 'redux-promise-middleware';
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';

const middleware = applyMiddleware(routerMiddleware(history), thunkMiddleware, promise, loadingBarMiddleware(), logger);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
    <Provider store={store}>
      <Routes/>
    </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
