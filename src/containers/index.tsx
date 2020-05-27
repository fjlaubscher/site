import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Layout from '../components/layout';

// containers
const Home = lazy(() => import('./home'));
const Health = lazy(() => import('./health'));
const NotFound = lazy(() => import('./not-found'));

const App = () => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(({ hash }) => {
      if (hash) {
        // Push onto callback queue so it runs after the DOM is updated,
        // this is required when navigating from a different page so that
        // the element is rendered on the page before trying to getElementById.
        setTimeout(() => {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) element.scrollIntoView();
        }, 0);
      } else {
        // always start at the top when visiting a new page
        window.scrollTo(0, 0);
      }
    });

    return () => unlisten();
  }, [history]);

  return (
    <Layout>
      <Suspense fallback={<span>loading</span>}>
        <Switch>
          <Route from="/" component={Home} exact />
          <Route from="/health" component={Health} exact />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
};
export default App;
