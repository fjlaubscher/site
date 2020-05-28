import React from 'react';
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import styles from './styles.css';

const Contact = () => (
  <div id="contact" className={styles.container}>
    <div className={styles.content}>
      <h2>Get in touch</h2>
      <div className={styles.links}>
        <a href="mailto:francoislaubscher@hotmail.com">
          <FaEnvelopeSquare />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/fjlaubscher"
        >
          <FaGithubSquare />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/fjlaubscher/"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
