import React from 'react';

// icons
import EmailIcon from './email.svg';
import GitHubIcon from './github.svg';
import LinkedInIcon from './linkedin.svg';

import styles from './styles.scss';

const Contact = () => (
  <div id="contact" className={styles.container}>
    <div className={styles.content}>
      <h2>Get in touch</h2>
      <div className={styles.links}>
        <a href="mailto:francoislaubscher@hotmail.com">
          <img src={EmailIcon} alt="email" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/fjlaubscher"
        >
          <img src={GitHubIcon} alt="github" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/fjlaubscher/"
        >
          <img src={LinkedInIcon} alt="linkedin" />
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
