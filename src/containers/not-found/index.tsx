import React from 'react';

import Container from '../../components/container';
import { ReactComponent as NotFoundSVG } from './404.svg';

import styles from './styles.css';

const NotFound = () => (
  <Container className={styles.container}>
    <h2>Uhhhh</h2>
    <NotFoundSVG className={styles.image} />
    <p>This doesn&apos;t seem right...</p>
  </Container>
);

export default NotFound;
