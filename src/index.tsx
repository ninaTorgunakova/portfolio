import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import MainPage from './MainPage/MainPage';
import { themeReducer } from './redux/themeReducer';

const store: Store = createStore(themeReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
