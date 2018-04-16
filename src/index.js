import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(saga);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
registerServiceWorker();
