import React from 'react';

// icons
import { ReactComponent as EmailIcon } from './email.svg';
import { ReactComponent as GithubIcon } from './github.svg';
import { ReactComponent as LinkedInIcon } from './linkedin.svg';

import styles from './styles.css';

const Contact = () => (
  <div id="contact" className={styles.container}>
    <div className={styles.content}>
      <h2>Get in touch</h2>
      <div className={styles.links}>
        <a href="mailto:francoislaubscher@hotmail.com">
          <EmailIcon />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/fjlaubscher"
        >
          <GithubIcon />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/fjlaubscher/"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
