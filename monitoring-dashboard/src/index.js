import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/store';

const container = document.getElementById('root');
const root = createRoot(container); // Create root using createRoot

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
