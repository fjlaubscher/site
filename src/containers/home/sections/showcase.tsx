import React from 'react';
import classnames from 'classnames';

// components
import Container from '../../../components/container';
import Project from '../../../components/project';

import projects from '../showcase.json';

import styles from '../home.module.scss';

const Showcase = () => {
  return (
    <Container id="showcase" className={classnames(styles.container, styles.showcase)}>
      <h2>Showcase</h2>
      {projects.map((project: Site.ShowcaseProject) => (
        <Project key={project.title} project={project} />
      ))}
    </Container>
  );
};

export default Showcase;
