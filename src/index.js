import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {StarSignProvider} from "./StarSignContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <StarSignProvider>
        <App />
      </StarSignProvider>
  </React.StrictMode>
);
