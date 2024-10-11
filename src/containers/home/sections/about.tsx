import React from 'react';
import classnames from 'classnames';

import Container from '../../../components/container';
import styles from '../home.module.scss';

export const Paragraphs = () => (
  <>
    <p>
      I&apos;m a Freelance Software Engineer with 11+ years of experience in developing and
      maintaining robust web applications.
    </p>
    <p>
      I've honed my skills across diverse industries, from structured corporations to dynamic tech
      startups and agencies. My expertise lies in crafting software solutions that streamline
      business processes and boost efficiency.
    </p>
    <p>
      As a seasoned remote worker of 6+ years, I've cultivated a strong work ethic and the ability
      to thrive in flexible environments.
    </p>
  </>
);

const About = () => (
  <Container id="about" className={classnames(styles.container, styles.about)}>
    <h2>About</h2>
    <Paragraphs />
  </Container>
);

export default About;
