import React, { ButtonHTMLAttributes } from 'react';

import LoaderSvg from './loader.svg';

import styles from './button.module.scss';

interface Props {
  isLoading?: boolean;
}

const Button = ({
  isLoading,
  className,
  children,
  ...props
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={styles.button} {...props}>
    {isLoading ? <img src={LoaderSvg} alt="Loading" /> : children}
  </button>
);

export default Button;
