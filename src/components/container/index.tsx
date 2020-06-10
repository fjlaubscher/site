import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

interface Props {
  id?: string;
  className?: string;
  alternate?: boolean;
  children?: React.ReactNode;
}

const Container = ({ id, className, alternate, children }: Props) => (
  <div
    id={id}
    className={classnames(styles.background, alternate && styles.alternate)}
  >
    <div className={classnames(styles.container, className)}>{children}</div>
  </div>
);

export default Container;
