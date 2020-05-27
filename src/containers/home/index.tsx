import React from 'react';

// sub sections
import Hero from './sections/hero';
import Skills from './sections/skills';
import About from './sections/about';
import Work from './sections/work';
import Showcase from './sections/showcase';

const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Showcase />
    <Work />
  </>
);

export default Home;
