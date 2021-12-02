import React from 'react';
import classnames from 'classnames';

import Container from '../../../components/container';
import styles from '../home.module.scss';

export const Paragraphs = () => (
  <>
    <p>
      I&apos;m a freelance software engineer with 8+ years of experience in developing and
      maintaining robust web apps.
    </p>
    <p>
      My work experience stretches across various industries, from structured corporate environments
      to dynamic and high-pressure environments such as tech startups and agencies.
    </p>
    <p>
      Working in these environments has enabled me to develop software which improves the
      productivity and efficiency of business processes.
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
