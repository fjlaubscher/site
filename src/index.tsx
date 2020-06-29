import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// global styles
import './styles/global.scss';

// app container
import App from './containers';

const publicUrl = process.env.PUBLIC_URL || '/';
const supportsHistory = 'pushState' in window.history;
const rootElement = document.getElementById('root');

const renderApp = (TheApp: React.FC) => {
  const HelixApp = (
    <BrowserRouter basename={publicUrl} forceRefresh={!supportsHistory}>
      <TheApp />
    </BrowserRouter>
  );

  return rootElement?.hasChildNodes()
    ? hydrate(HelixApp, rootElement)
    : render(HelixApp, rootElement);
};

if (module.hot) {
  module.hot.accept(() => {
    import('./containers')
      .then((mod) => renderApp(mod.default))
      .catch((ex) => console.error(ex));
  });
}

renderApp(App);
