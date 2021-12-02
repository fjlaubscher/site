import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// global styles
import './styles/global.scss';

// app container
import App from './containers';

const Website = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  if (rootElement.hasChildNodes()) {
    hydrate(Website, rootElement);
  } else {
    render(Website, rootElement);
  }
}
