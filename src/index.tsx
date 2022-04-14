import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style/index.less'
import App from './components/App.tsx';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './store/reducers'

let store = createStore(todoApp)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
