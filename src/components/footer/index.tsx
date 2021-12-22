import React, { useState } from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import classnames from 'classnames';

// components
import ContactForm from './form';
import Message from '../message';

import WaveUrl from './wave.svg';

import styles from './footer.module.scss';

const Footer = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  return (
    <>
      <img className={styles.wave} src={WaveUrl} alt="wave" />
      <div id="get-in-touch" className={styles.section}>
        <h2>Get in touch</h2>
        {hasSubmitted ? (
          <Message isError={!emailSent}>
            <h4>{emailSent ? 'Thank you!' : 'Oops!'}</h4>
            <p>{emailSent ? `I'll get back to you.` : 'Unable to send your query.'}</p>
          </Message>
        ) : (
          <ContactForm
            onSubmit={async ({ email, name, query }) => {
              try {
                const response = await fetch('https://mailer.francoislaubscher.com', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    from: email,
                    to: 'francoisjlaubscher@gmail.com',
                    subject: `Website Enquiry - ${name}`,
                    body: query
                  })
                });

                setEmailSent(response.ok);
              } catch (ex: any) {
                setEmailSent(false);
              }

              setHasSubmitted(true);

              return;
            }}
          />
        )}
      </div>
      <div className={styles.links}>
        <a target="_blank" rel="noreferrer" href="https://github.com/fjlaubscher">
          <FaGithubSquare />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fjlaubscher/">
          <FaLinkedin />
        </a>
      </div>
    </>
  );
};

export default Footer;
