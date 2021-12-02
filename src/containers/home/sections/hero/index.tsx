import React from 'react';
import { useMedia } from 'react-use';
import { FaHeart } from 'react-icons/fa';

// components
import Container from '../../../../components/container';

import { Paragraphs } from '../about';
// assets

import LightAvatarUrl from './me-light.svg';
import DarkAvatarUrl from './me-dark.svg';
import styles from '../../home.module.scss';

const Hero = () => {
  const prefersDark = useMedia('(prefers-color-scheme: dark)');
  return (
    <Container className={styles.hero}>
      <div className={styles.text}>
        <h1>Hi! I&apos;m Francois.</h1>
        <h3>
          I <FaHeart /> building for the web
        </h3>
        <div className={styles.about}>
          <Paragraphs />
        </div>
      </div>
      <div className={styles.me}>
        <img src={prefersDark ? DarkAvatarUrl : LightAvatarUrl} alt={'avatar'} />
      </div>
    </Container>
  );
};

export default Hero;
