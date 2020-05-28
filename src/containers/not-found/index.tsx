import React from 'react';

import { ReactComponent as NotFoundSVG } from './404.svg';

import styles from './styles.css';

const NotFound = () => (
  <div className={styles.notFound}>
    <h1>Uhhh</h1>
    <NotFoundSVG className={styles.image} />
    <p>This doesn&apos;t seem right...</p>
  </div>
);

export default NotFound;
