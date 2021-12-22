import React from 'react';

import styles from './message.module.scss';

interface Props {
  children: React.ReactNode;
  isError?: boolean;
}

const Message = ({ children, isError }: Props) => (
  <div className={`${styles.message} ${isError ? styles.error : ''}`}>{children}</div>
);

export default Message;
