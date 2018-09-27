import React from 'react';
import { Router } from './routing';
import { Provider } from 'react-redux';
import { store } from 'ReduxStore';
import { default as MainPage } from './main';

export const App = () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
);
