import { registerRootComponent } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux';

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerRootComponent(Main);
