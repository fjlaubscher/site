import React from 'react';
import { useForm } from 'react-hook-form';

// components
import Button from '../button';
import Input from '../input';
import TextArea from '../input/textarea';

import styles from './footer.module.scss';

interface Props {
  onSubmit: (values: Site.ContactForm) => Promise<void>;
}

const ContactForm = ({ onSubmit }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors, isValid }
  } = useForm<Site.ContactForm>({ mode: 'onChange' });

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Name"
        type="text"
        placeholder="Your name"
        isRequired
        errorMessage={errors.name ? 'Required' : undefined}
        {...register('name', { required: true })}
      />
      <Input
        label="Email"
        type="email"
        placeholder="example@email.com"
        isRequired
        errorMessage={errors.email ? 'Required' : undefined}
        {...register('email', { required: true })}
      />
      <TextArea
        label="How can I help?"
        isRequired
        errorMessage={errors.query ? 'Required' : undefined}
        {...register('query', { required: true })}
      />
      <Button type="submit" disabled={!isValid} isLoading={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
