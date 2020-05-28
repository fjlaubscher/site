import React from 'react';

// components
import Container from '../../../../components/container';
import { Paragraphs } from '../about';

// assets
import { ReactComponent as HeartIcon } from './heart.svg';
import { ReactComponent as MeSvg } from './me.svg';

import styles from '../../styles.css';

const Hero = () => (
  <Container className={styles.hero}>
    <div className={styles.text}>
      <h1>Hi! I&apos;m Francois.</h1>
      <h3>
        I <HeartIcon /> building for the web
      </h3>
      <div className={styles.about}>
        <Paragraphs />
      </div>
    </div>
    <div className={styles.me}>
      <MeSvg />
    </div>
  </Container>
);

export default Hero;
