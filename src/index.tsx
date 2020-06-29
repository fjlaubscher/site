import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// global styles
import './styles/global.scss';

// app container
import App from './containers';

const publicUrl = process.env.PUBLIC_URL || '/';
const supportsHistory = 'pushState' in window.history;

const renderApp = (TheApp: React.FC) => {
  const HelixApp = (
    <BrowserRouter basename={publicUrl} forceRefresh={!supportsHistory}>
      <TheApp />
    </BrowserRouter>
  );

  const rootElement = document.getElementById('root');
  if (rootElement) {
    return render(HelixApp, rootElement);
  }

  console.error('Unable to render React app. Could not find #root');
  return null;
};

if (module.hot) {
  module.hot.accept(() => {
    import('./containers')
      .then((mod) => renderApp(mod.default))
      .catch((ex) => console.error(ex));
  });
}

renderApp(App);
