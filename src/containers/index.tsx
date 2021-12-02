import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Layout from '../components/layout';

// containers
import Home from './home';
const Health = lazy(() => import('./health'));
const NotFound = lazy(() => import('./not-found'));

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) element.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Layout>
      <Suspense fallback={<span>loading</span>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/health" element={<Health />} />
          <Route element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
export default App;
