import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from 'Redux/Store';
import { App } from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.scss';
import './firebase';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider  store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
);
