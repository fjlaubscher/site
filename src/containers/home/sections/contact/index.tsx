import React from 'react';
import { FaEnvelope, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import styles from './styles.scss';

const Contact = () => (
  <div id="contact" className={styles.contact}>
    <h2>Get in touch</h2>
    <div className={styles.links}>
      <a href="mailto:hi@francois.codes">
        <FaEnvelope />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/fjlaubscher">
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
);

export default Contact;
