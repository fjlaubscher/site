import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';

import Layout from '../components/layout';

// containers
const Home = lazy(() => import('./home'));
const Health = lazy(() => import('./health'));
const NotFound = lazy(() => import('./not-found'));

const App = () => (
  <Layout>
    <Suspense fallback={<Loader active />}>
      <Switch>
        <Route from="/" component={Home} exact />
        <Route from="/health" component={Health} exact />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Layout>
);

export default App;
