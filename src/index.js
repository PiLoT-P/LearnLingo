import React from 'react';
import ReactDOM from 'react-dom/client';
import { persistor, store } from 'Redux/Store';
import { App } from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';
import './firebase';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider  store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
