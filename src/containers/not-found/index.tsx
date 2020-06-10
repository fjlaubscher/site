import React from 'react';

import Container from '../../components/container';
import NotFoundUrl from './404.svg';

import styles from './styles.scss';

const NotFound = () => (
  <Container className={styles.container}>
    <h2>Uhhhh</h2>
    <img src={NotFoundUrl} alt="not found" className={styles.image} />
    <p>This doesn&apos;t seem right...</p>
  </Container>
);

export default NotFound;
