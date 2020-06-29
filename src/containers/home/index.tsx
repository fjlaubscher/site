import React from 'react';

// sub sections
import Hero from './sections/hero';
import Skills from './sections/skills';
import About from './sections/about';
import Work from './sections/work';
import Showcase from './sections/showcase';
import Contact from './sections/contact';

const Home = () => (
  <>
    <Hero />
    <Skills />
    <About />
    <Showcase />
    <Work />
    <Contact />
  </>
);

export default Home;
