import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);
