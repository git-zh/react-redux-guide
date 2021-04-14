import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store'

/**
 * react-redux
 *   Provider
 *   connect
 */

ReactDOM.render(
  // 通过 Provider 组件 将store放在了全局的组件可以够到的地方
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
