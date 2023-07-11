import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './component/App';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    <ToastContainer />
  </React.StrictMode>
);

