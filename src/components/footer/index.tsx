import React, { useState } from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import styles from './footer.module.scss';

const Footer = () => (
  <>
    <img className={styles.wave} src="/wave.svg" alt="wave" />
    <div id="get-in-touch" className={styles.footer}>
      <h2>Get in touch</h2>
      <p><a href="mailto:francoisjlaubscher@gmail.com">Send me an email</a> or <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fjlaubscher/">message me on LinkedIn</a></p>
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

export default Footer;
