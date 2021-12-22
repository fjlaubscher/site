import React, { forwardRef } from 'react';

import styles from './input.module.scss';

interface Props {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  isRequired?: boolean;
  errorMessage?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, name, type, placeholder, errorMessage, isRequired, onChange }: Props, ref) => (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className={styles.input}
        name={name}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        ref={ref}
        onChange={onChange}
      />
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  )
);

export default Input;
