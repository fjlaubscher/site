import React from 'react';
import classnames from 'classnames';
import { FaHeart } from 'react-icons/fa';

// components
import Container from '../../../components/container';

// assets
import { ReactComponent as MeSvg } from '../../../assets/me.svg';
import styles from '../styles.css';

const Hero = () => (
  <Container className={classnames(styles.container, styles.hero)}>
    <div className={styles.text}>
      <h1>Hi! I&apos;m Francois.</h1>
      <h3>
        I <FaHeart /> building for the web
      </h3>
    </div>
    <div className={styles.me}>
      <MeSvg />
    </div>
  </Container>
);

export default Hero;
