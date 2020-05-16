import React from 'react';
import classnames from 'classnames';

import styles from './styles.css';

interface Props {
  className?: string;
  alternate?: boolean;
  children: React.ReactNode;
}

const Container = ({ className, alternate, children }: Props) => (
  <div className={classnames(styles.background, alternate && styles.alternate)}>
    <div className={classnames(styles.container, className)}>{children}</div>
  </div>
);

export default Container;
