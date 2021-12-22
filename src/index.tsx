import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// global styles
import './styles/global.scss';

// app container
import App from './containers';

const Website = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  render(Website, rootElement);
}
