import React from 'react';
import { useAsync } from 'react-use';

// components
import Hero from './hero';
import Skills from './skills';
import About from './about';

const Home = () => {
  const { loading, value } = useAsync(async () => {
    const response = await fetch('/work.json');
    const result = await response.json();
    return result;
  });

  return (
    <>
      <Hero />
      <Skills />
      <About />
    </>
  );
};

export default Home;
