import React, { forwardRef } from 'react';

import styles from './input.module.scss';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  isRequired?: boolean;
  errorMessage?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, name, errorMessage, placeholder, isRequired, onChange }: Props, ref) => (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        className={styles.input}
        name={name}
        required={isRequired}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
      />
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  )
);

export default TextArea;
